const mongoose =  require("mongoose")
const Chat = require("./models/chats")


// const chat1 = new Chat({
//     from : "antu singh",
//     to : "suraj kumar developer",
//     message : "Hi suraj kumar, How are you?",
//     created_at : new Date(),
// });

const chats = [
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T10:56:47.589492")
}),
new Chat({
    from: "Deepa",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T10:57:47.589492")
}),
new Chat({
    from: "Sahil",
    to: "suraj kumar developer",
    message: "That worked well.",
    created_at: new Date("2025-08-02T10:58:47.589492")
}),
new Chat({
    from: "Aman",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T10:59:47.589492")
}),
new Chat({
    from: "Ravi",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:00:47.589492")
}),
new Chat({
    from: "Neha",
    to: "suraj kumar developer",
    message: "Thank you for the support.",
    created_at: new Date("2025-08-02T11:01:47.589492")
}),
new Chat({
    from: "Pooja",
    to: "suraj kumar developer",
    message: "Your project looks great!",
    created_at: new Date("2025-08-02T11:02:47.589492")
}),
new Chat({
    from: "Meena",
    to: "suraj kumar developer",
    message: "What’s the status of the issue?",
    created_at: new Date("2025-08-02T11:03:47.589492")
}),
new Chat({
    from: "Manish",
    to: "suraj kumar developer",
    message: "Hi Suraj, how are you?",
    created_at: new Date("2025-08-02T11:04:47.589492")
}),
new Chat({
    from: "Aman",
    to: "suraj kumar developer",
    message: "Let’s celebrate the release!",
    created_at: new Date("2025-08-02T11:05:47.589492")
}),
new Chat({
    from: "Divya",
    to: "suraj kumar developer",
    message: "That worked well.",
    created_at: new Date("2025-08-02T11:06:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Let’s celebrate the release!",
    created_at: new Date("2025-08-02T11:07:47.589492")
}),
new Chat({
    from: "Alok",
    to: "suraj kumar developer",
    message: "Let’s celebrate the release!",
    created_at: new Date("2025-08-02T11:08:47.589492")
}),
new Chat({
    from: "Sahil",
    to: "suraj kumar developer",
    message: "Let's work on the app together.",
    created_at: new Date("2025-08-02T11:09:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Where is the documentation?",
    created_at: new Date("2025-08-02T11:10:47.589492")
}),
new Chat({
    from: "Alok",
    to: "suraj kumar developer",
    message: "Where is the documentation?",
    created_at: new Date("2025-08-02T11:11:47.589492")
}),
new Chat({
    from: "Priya",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:12:47.589492")
}),
new Chat({
    from: "Pooja",
    to: "suraj kumar developer",
    message: "What’s the status of the issue?",
    created_at: new Date("2025-08-02T11:13:47.589492")
}),
new Chat({
    from: "Anjali",
    to: "suraj kumar developer",
    message: "Great presentation!",
    created_at: new Date("2025-08-02T11:14:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Let's work on the app together.",
    created_at: new Date("2025-08-02T11:15:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T11:16:47.589492")
}),
new Chat({
    from: "Neha",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:17:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Great presentation!",
    created_at: new Date("2025-08-02T11:18:47.589492")
}),
new Chat({
    from: "Vikram",
    to: "suraj kumar developer",
    message: "What’s the status of the issue?",
    created_at: new Date("2025-08-02T11:19:47.589492")
}),
new Chat({
    from: "Pooja",
    to: "suraj kumar developer",
    message: "Your project looks great!",
    created_at: new Date("2025-08-02T11:20:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Thank you for the support.",
    created_at: new Date("2025-08-02T11:21:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T11:22:47.589492")
}),
new Chat({
    from: "Deepa",
    to: "suraj kumar developer",
    message: "Your project looks great!",
    created_at: new Date("2025-08-02T11:23:47.589492")
}),
new Chat({
    from: "Alok",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:24:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Thank you for the support.",
    created_at: new Date("2025-08-02T11:25:47.589492")
}),
new Chat({
    from: "Manish",
    to: "suraj kumar developer",
    message: "Let's fix this bug.",
    created_at: new Date("2025-08-02T11:26:47.589492")
}),
new Chat({
    from: "Vikram",
    to: "suraj kumar developer",
    message: "Please check my code.",
    created_at: new Date("2025-08-02T11:27:47.589492")
}),
new Chat({
    from: "Priya",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T11:28:47.589492")
}),
new Chat({
    from: "Divya",
    to: "suraj kumar developer",
    message: "What’s the status of the issue?",
    created_at: new Date("2025-08-02T11:29:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T11:30:47.589492")
}),
new Chat({
    from: "Anjali",
    to: "suraj kumar developer",
    message: "Where is the documentation?",
    created_at: new Date("2025-08-02T11:31:47.589492")
}),
new Chat({
    from: "Meena",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T11:32:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:33:47.589492")
}),
new Chat({
    from: "Aman",
    to: "suraj kumar developer",
    message: "Great presentation!",
    created_at: new Date("2025-08-02T11:34:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T11:35:47.589492")
}),
new Chat({
    from: "Divya",
    to: "suraj kumar developer",
    message: "Let's work on the app together.",
    created_at: new Date("2025-08-02T11:36:47.589492")
}),
new Chat({
    from: "Aman",
    to: "suraj kumar developer",
    message: "Deploy is complete.",
    created_at: new Date("2025-08-02T11:37:47.589492")
}),
new Chat({
    from: "Aarti",
    to: "suraj kumar developer",
    message: "Thank you for the support.",
    created_at: new Date("2025-08-02T11:38:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Are you available now?",
    created_at: new Date("2025-08-02T11:39:47.589492")
}),
new Chat({
    from: "Anjali",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T11:40:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T11:41:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T11:42:47.589492")
}),
new Chat({
    from: "Sahil",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T11:43:47.589492")
}),
new Chat({
    from: "Deepa",
    to: "suraj kumar developer",
    message: "Let’s celebrate the release!",
    created_at: new Date("2025-08-02T11:44:47.589492")
}),
new Chat({
    from: "Priya",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:45:47.589492")
}),
new Chat({
    from: "Akash",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T11:46:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Your project looks great!",
    created_at: new Date("2025-08-02T11:47:47.589492")
}),
new Chat({
    from: "Sneha",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T11:48:47.589492")
}),
new Chat({
    from: "Divya",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:49:47.589492")
}),
new Chat({
    from: "Sahil",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T11:50:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T11:51:47.589492")
}),
new Chat({
    from: "Neha",
    to: "suraj kumar developer",
    message: "Let's fix this bug.",
    created_at: new Date("2025-08-02T11:52:47.589492")
}),
new Chat({
    from: "Manish",
    to: "suraj kumar developer",
    message: "Where is the documentation?",
    created_at: new Date("2025-08-02T11:53:47.589492")
}),
new Chat({
    from: "Karan",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T11:54:47.589492")
}),
new Chat({
    from: "Anjali",
    to: "suraj kumar developer",
    message: "Are you available now?",
    created_at: new Date("2025-08-02T11:55:47.589492")
}),
new Chat({
    from: "Alok",
    to: "suraj kumar developer",
    message: "Please check my code.",
    created_at: new Date("2025-08-02T11:56:47.589492")
}),
new Chat({
    from: "Neha",
    to: "suraj kumar developer",
    message: "Are you available now?",
    created_at: new Date("2025-08-02T11:57:47.589492")
}),
new Chat({
    from: "Pooja",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T11:58:47.589492")
}),
new Chat({
    from: "Ravi",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T11:59:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T12:00:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Let’s celebrate the release!",
    created_at: new Date("2025-08-02T12:01:47.589492")
}),
new Chat({
    from: "Ravi",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T12:02:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T12:03:47.589492")
}),
new Chat({
    from: "Anjali",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T12:04:47.589492")
}),
new Chat({
    from: "Meena",
    to: "suraj kumar developer",
    message: "Hi Suraj, how are you?",
    created_at: new Date("2025-08-02T12:05:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Deploy is complete.",
    created_at: new Date("2025-08-02T12:06:47.589492")
}),
new Chat({
    from: "Alok",
    to: "suraj kumar developer",
    message: "Great presentation!",
    created_at: new Date("2025-08-02T12:07:47.589492")
}),
new Chat({
    from: "Vikram",
    to: "suraj kumar developer",
    message: "Your project looks great!",
    created_at: new Date("2025-08-02T12:08:47.589492")
}),
new Chat({
    from: "Neha",
    to: "suraj kumar developer",
    message: "Where is the documentation?",
    created_at: new Date("2025-08-02T12:09:47.589492")
}),
new Chat({
    from: "Deepa",
    to: "suraj kumar developer",
    message: "Can you review my PR?",
    created_at: new Date("2025-08-02T12:10:47.589492")
}),
new Chat({
    from: "Ravi",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T12:11:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Hi Suraj, how are you?",
    created_at: new Date("2025-08-02T12:12:47.589492")
}),
new Chat({
    from: "Sneha",
    to: "suraj kumar developer",
    message: "Where is the documentation?",
    created_at: new Date("2025-08-02T12:13:47.589492")
}),
new Chat({
    from: "Sahil",
    to: "suraj kumar developer",
    message: "Deploy is complete.",
    created_at: new Date("2025-08-02T12:14:47.589492")
}),
new Chat({
    from: "Pooja",
    to: "suraj kumar developer",
    message: "Good job on the UI!",
    created_at: new Date("2025-08-02T12:15:47.589492")
}),
new Chat({
    from: "Akash",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T12:16:47.589492")
}),
new Chat({
    from: "Neha",
    to: "suraj kumar developer",
    message: "What’s the status of the issue?",
    created_at: new Date("2025-08-02T12:17:47.589492")
}),
new Chat({
    from: "Aarti",
    to: "suraj kumar developer",
    message: "Great presentation!",
    created_at: new Date("2025-08-02T12:18:47.589492")
}),
new Chat({
    from: "Deepa",
    to: "suraj kumar developer",
    message: "Ping me when you're free.",
    created_at: new Date("2025-08-02T12:19:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Thank you for the support.",
    created_at: new Date("2025-08-02T12:20:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Let's work on the app together.",
    created_at: new Date("2025-08-02T12:21:47.589492")
}),
new Chat({
    from: "Ravi",
    to: "suraj kumar developer",
    message: "Looking forward to your reply.",
    created_at: new Date("2025-08-02T12:22:47.589492")
}),
new Chat({
    from: "Pooja",
    to: "suraj kumar developer",
    message: "Please check my code.",
    created_at: new Date("2025-08-02T12:23:47.589492")
}),
new Chat({
    from: "Aarti",
    to: "suraj kumar developer",
    message: "Let’s celebrate the release!",
    created_at: new Date("2025-08-02T12:24:47.589492")
}),
new Chat({
    from: "Manish",
    to: "suraj kumar developer",
    message: "Shall we connect now?",
    created_at: new Date("2025-08-02T12:25:47.589492")
}),
new Chat({
    from: "Shreya",
    to: "suraj kumar developer",
    message: "Let's work on the app together.",
    created_at: new Date("2025-08-02T12:26:47.589492")
}),
new Chat({
    from: "Rina",
    to: "suraj kumar developer",
    message: "Let's fix this bug.",
    created_at: new Date("2025-08-02T12:27:47.589492")
}),
new Chat({
    from: "Divya",
    to: "suraj kumar developer",
    message: "I need your help.",
    created_at: new Date("2025-08-02T12:28:47.589492")
}),
new Chat({
    from: "Anjali",
    to: "suraj kumar developer",
    message: "That worked well.",
    created_at: new Date("2025-08-02T12:29:47.589492")
}),
new Chat({
    from: "Rohit",
    to: "suraj kumar developer",
    message: "Can you review my PR?",
    created_at: new Date("2025-08-02T12:30:47.589492")
}),
new Chat({
    from: "Alok",
    to: "suraj kumar developer",
    message: "That worked well.",
    created_at: new Date("2025-08-02T12:31:47.589492")
}),
new Chat({
    from: "Manish",
    to: "suraj kumar developer",
    message: "Hi Suraj, how are you?",
    created_at: new Date("2025-08-02T12:32:47.589492")
}),
new Chat({
    from: "Ravi",
    to: "suraj kumar developer",
    message: "Thank you for the support.",
    created_at: new Date("2025-08-02T12:33:47.589492")
}),
new Chat({
    from: "Akash",
    to: "suraj kumar developer",
    message: "Great presentation!",
    created_at: new Date("2025-08-02T12:34:47.589492")
}),
new Chat({
    from: "Meena",
    to: "suraj kumar developer",
    message: "Deploy is complete.",
    created_at: new Date("2025-08-02T12:35:47.589492")
})
];



