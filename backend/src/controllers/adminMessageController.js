import Contact from "../models/Contact.js";

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Get messages error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages.",
    });
  }
};

const markMessageAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Contact.findByIdAndUpdate(
      id,
      { isRead: true },
      {
        new: true,
        runValidators: true,
      },
    ).select("-__v");

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message marked as read.",
      data: message,
    });
  } catch (error) {
    console.error("Mark message as read error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update message.",
    });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Contact.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully.",
    });
  } catch (error) {
    console.error("Delete message error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to delete message.",
    });
  }
};

export { getMessages, markMessageAsRead, deleteMessage };
