import React, { useState, useContext } from "react";
import { SocketContext } from "./context";

export default function ConnectModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const socketCtx = useContext(SocketContext);
  const [value, setValue] = useState<string>("ws://localhost:4001");
  const [error, setError] = useState<string | null>(null);
  const [createdRoom, setCreatedRoom] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleConnect = () => {
    setError(null);
    if (!value) return setError("Please enter a connection URL or id.");

    try {
      // Basic validation: must start with ws:// or wss:// or look like a room id
      if (!value.startsWith("ws://") && !value.startsWith("wss://")) {
        // treat as room id — translate to default ws host + room path
        // default host uses localhost and port 4001; adjust as needed
        const room = encodeURIComponent(value.trim());
        const url = `ws://localhost:4001/?room=${room}`;
        socketCtx?.connect(url);
      } else {
        socketCtx?.connect(value);
      }

      onClose();
    } catch (err: any) {
      setError(err?.message || String(err));
    }
  };

  const generateRoomId = () => {
    try {
      const id = (crypto as any).randomUUID ? (crypto as any).randomUUID().split("-")[0] : Math.random().toString(36).slice(2, 9);
      return id;
    } catch (e) {
      return Math.random().toString(36).slice(2, 9);
    }
  };

  const handleCreateRoom = () => {
    setError(null);
    const room = generateRoomId();
    const url = `ws://localhost:4001/?room=${encodeURIComponent(room)}`;
    socketCtx?.connect(url);
    setCreatedRoom(room);
    setValue(room);
    setCopied(false);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      setError("Copy failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="panel p-6 w-[min(92vw,420px)]">
        <h2 className="text-lg text-accent mb-3">Connect to player</h2>
        <p className="text-sm panel-quiet mb-4">
          Paste a connection URL or room id.
        </p>
        <input
          className="w-full p-2 mb-3 rounded bg-black/30 text-white"
          style={{ border: "1px solid var(--panel-border)" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="ws://server.example:4001 or room-id"
        />
        {error && <div className="text-rose-400 text-sm mb-2">{error}</div>}

        <div className="flex items-center gap-3 justify-end mb-3">
          <button className="btn-ghost" onClick={handleCreateRoom}>
            Create room
          </button>
          <button className="btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-accent" onClick={handleConnect}>
            Connect
          </button>
        </div>

        {createdRoom && (
          <div className="mt-2 panel-quiet p-3 rounded flex items-center justify-between">
            <div>
              <div className="text-sm text-accent">Room created</div>
              <div className="font-mono text-sm mt-1">{createdRoom}</div>
              <div className="text-xs mt-1 panel-quiet">Share this id with your co-player so they can join.</div>
            </div>
            <div className="flex flex-col items-end">
              <button
                className="btn-ghost mb-2"
                onClick={() => handleCopy(`ws://localhost:4001/?room=${encodeURIComponent(createdRoom)}`)}
              >
                {copied ? "Copied" : "Copy URL"}
              </button>
              <button className="btn-ghost" onClick={() => handleCopy(createdRoom)}>
                {copied ? "Copied" : "Copy id"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
