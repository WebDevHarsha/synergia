"use client";
import React, { useState } from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  organizer: string;
  date: string;
  skills: string[];
  organizerProfilePic?: string; // Optional for future profile picture
}

interface EventFormProps {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const Page: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Hackathon 2024",
      description: "Looking for 3 teammates with experience in Python and AI.",
      organizer: "John Doe",
      date: "October 10, 2024",
      skills: ["Python", "AI"],
      organizerProfilePic: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      description: "Need 2 teammates with business development and marketing skills.",
      organizer: "Jane Smith",
      date: "November 2, 2024",
      skills: ["Business", "Marketing"],
      organizerProfilePic: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Photography Workshop",
      description: "Looking for 1 person with photo editing skills for a collaborative project.",
      organizer: "Sam Lee",
      date: "October 5, 2024",
      skills: ["Photography", "Editing"],
      organizerProfilePic: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Find or Post an Event</h1>

      {/* Form to Post a New Event */}
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Post Your Event</h2>
        <EventForm setEvents={setEvents} />
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className="flex items-center mb-2">
        {event.organizerProfilePic && (
          <img
            src={event.organizerProfilePic}
            alt={event.organizer}
            className="w-8 h-8 rounded-full mr-2"
          />
        )}
        <p className="text-sm text-gray-500">
          <strong>Posted by:</strong>{' '}
          <a href={`/profile/${event.organizer}`} className="text-blue-600 hover:underline">
            {event.organizer}
          </a>
        </p>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
      <p className="mt-2 text-gray-700">{event.description}</p>
      <p className="mt-2 text-sm text-gray-500">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        <strong>Required Skills:</strong> {event.skills.join(", ")}
      </p>
    </div>
  );
};

const EventForm: React.FC<EventFormProps> = ({ setEvents }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizer: "",
    date: "",
    skills: "",
    organizerProfilePic: "", // Optional for future profile picture input
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEvent: Event = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      organizer: formData.organizer,
      date: formData.date,
      skills: formData.skills.split(",").map((skill) => skill.trim()),
      organizerProfilePic: formData.organizerProfilePic || "https://via.placeholder.com/150", // Placeholder if no profile pic is provided
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);

    // Clear form
    setFormData({
      title: "",
      description: "",
      organizer: "",
      date: "",
      skills: "",
      organizerProfilePic: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Event Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Organizer Name</label>
        <input
          type="text"
          value={formData.organizer}
          onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Event Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Required Skills (comma-separated)</label>
        <input
          type="text"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Organizer Profile Picture (Optional)</label>
        <input
          type="text"
          value={formData.organizerProfilePic}
          onChange={(e) => setFormData({ ...formData, organizerProfilePic: e.target.value })}
          placeholder="URL to profile picture"
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Post Event
      </button>
    </form>
  );
};

export default Page;