import { useEffect, useState } from "react";
import api from "../api/axios";

import {
  Mail,
  MailOpen,
  Trash2,
  RefreshCw,
  LogOut,
  ArrowLeft,
  MessageSquare,
  CheckCircle,
  User,
  Calendar,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [actionLoading, setActionLoading] = useState(null);

  const adminInfo = JSON.parse(localStorage.getItem("adminInfo") || "null");

  const token = localStorage.getItem("adminToken");

  // Fetch messages
  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await api.get("/admin/messages");

      if (response.data.success) {
        setMessages(response.data.messages);
      }
    } catch (error) {
      console.error("Fetch messages error:", error);

      if (error.response?.status === 401) {
        return;
      }

      setErrorMessage(
        error.response?.data?.message || "Failed to load messages.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Check login and fetch messages
  useEffect(() => {
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    fetchMessages();
  }, []);

  // Mark message as read
  const handleMarkAsRead = async (messageId) => {
    try {
      setActionLoading(messageId);
      setErrorMessage("");

      const response = await api.patch(`/admin/messages/${messageId}/read`);

      if (response.data.success) {
        setMessages((previousMessages) =>
          previousMessages.map((message) =>
            message._id === messageId
              ? {
                  ...message,
                  isRead: true,
                }
              : message,
          ),
        );
      }
    } catch (error) {
      console.error("Mark as read error:", error);

      if (error.response?.status === 401) {
        return;
      }

      setErrorMessage(
        error.response?.data?.message || "Failed to mark message as read.",
      );
    } finally {
      setActionLoading(null);
    }
  };

  // Delete message
  const handleDelete = async (messageId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setActionLoading(messageId);
      setErrorMessage("");

      const response = await api.delete(`/admin/messages/${messageId}`);

      if (response.data.success) {
        setMessages((previousMessages) =>
          previousMessages.filter((message) => message._id !== messageId),
        );
      }
    } catch (error) {
      console.error("Delete message error:", error);

      if (error.response?.status === 401) {
        return;
      }

      setErrorMessage(
        error.response?.data?.message || "Failed to delete message.",
      );
    } finally {
      setActionLoading(null);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");

    navigate("/admin/login", { replace: true });
  };

  const totalMessages = messages.length;

  const unreadMessages = messages.filter((message) => !message.isRead).length;

  const readMessages = messages.filter((message) => message.isRead).length;

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm text-blue-400">Admin Panel</p>

            <h1 className="text-2xl font-bold">Portfolio Dashboard</h1>

            {adminInfo?.name && (
              <p className="mt-1 text-sm text-slate-400">
                Welcome, {adminInfo.name}
              </p>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top Actions */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <button
            onClick={() => navigate("/")}
            className="flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </button>

          <button
            onClick={fetchMessages}
            disabled={isLoading}
            className="flex w-fit items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400 disabled:opacity-50"
          >
            <RefreshCw size={17} className={isLoading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {errorMessage}
          </div>
        )}

        {/* Statistics */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Total Messages</p>

                <p className="mt-2 text-3xl font-bold">{totalMessages}</p>
              </div>

              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <MessageSquare size={24} />
              </div>
            </div>
          </motion.div>

          {/* Unread */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Unread Messages</p>

                <p className="mt-2 text-3xl font-bold text-yellow-400">
                  {unreadMessages}
                </p>
              </div>

              <div className="rounded-xl bg-yellow-500/10 p-3 text-yellow-400">
                <Mail size={24} />
              </div>
            </div>
          </motion.div>

          {/* Read */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Read Messages</p>

                <p className="mt-2 text-3xl font-bold text-green-400">
                  {readMessages}
                </p>
              </div>

              <div className="rounded-xl bg-green-500/10 p-3 text-green-400">
                <MailOpen size={24} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Messages */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800 px-6 py-5">
            <h2 className="text-xl font-semibold">Contact Messages</h2>

            <p className="mt-1 text-sm text-slate-400">
              Messages submitted through your portfolio.
            </p>
          </div>

          {/* Loading */}
          {isLoading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">
                <RefreshCw
                  size={30}
                  className="mx-auto animate-spin text-blue-400"
                />

                <p className="mt-3 text-sm text-slate-400">
                  Loading messages...
                </p>
              </div>
            </div>
          ) : messages.length === 0 ? (
            /* Empty */
            <div className="flex min-h-[300px] items-center justify-center px-6">
              <div className="text-center">
                <MessageSquare size={40} className="mx-auto text-slate-600" />

                <h3 className="mt-4 text-lg font-semibold">No messages yet</h3>

                <p className="mt-2 text-sm text-slate-500">
                  Contact form submissions will appear here.
                </p>
              </div>
            </div>
          ) : (
            /* Messages List */
            <div className="divide-y divide-slate-800">
              {messages.map((message) => (
                <div
                  key={message._id}
                  className={`p-6 transition ${
                    message.isRead ? "bg-slate-900" : "bg-blue-500/[0.03]"
                  }`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    {/* Message Info */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        {!message.isRead && (
                          <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400">
                            NEW
                          </span>
                        )}

                        {message.isRead && (
                          <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-400">
                            <CheckCircle size={13} />
                            READ
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {message.subject}
                      </h3>

                      <div className="mt-3 grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <User size={15} />
                          <span>{message.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Mail size={15} />

                          <a
                            href={`mailto:${message.email}`}
                            className="transition hover:text-blue-400"
                          >
                            {message.email}
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar size={15} />

                          <span>{formatDate(message.createdAt)}</span>
                        </div>
                      </div>

                      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
                        <p className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
                          {message.message}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 flex-wrap gap-2 lg:w-40 lg:flex-col">
                      {!message.isRead && (
                        <button
                          onClick={() => handleMarkAsRead(message._id)}
                          disabled={actionLoading === message._id}
                          className="flex items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm font-medium text-green-400 transition hover:bg-green-500/20 disabled:opacity-50"
                        >
                          <MailOpen size={16} />
                          Mark Read
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(message._id)}
                        disabled={actionLoading === message._id}
                        className="flex items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20 disabled:opacity-50"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-slate-600">
          Admin Dashboard • Saiful Islam Portfolio
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
