import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { toast } from "react-toastify";

export default function EventForm() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    owner: user ? user.name : "",
    title: "",
    description: "",
    organizedBy: "",
    eventDate: "",
    eventTime: "",
    location: "",
    image: null,
  });

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidDate = (dateStr) => {
    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date);
  };

  const isValidTime = (timeStr) => {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(timeStr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidDate(formData.eventDate) || !isValidTime(formData.eventTime)) {
      toast.error("Invalid date or time");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await axios.post("/createEvent", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      toast.success(response.data.message || "Event created successfully!");
      console.log("Event created successfully:", response.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Failed to create event");
        console.error("Backend Error:", error.response.data.details);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col ml-20 mt-10">
      <div>
        <h1 className="font-bold text-[36px] mb-5">Post an Event</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col">
          Title:
          <input
            type="text"
            name="title"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none w-80" // Added width
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Organized By:
          <input
            type="text"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none w-80" // Added width
            name="organizedBy"
            value={formData.organizedBy}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Description:
          <textarea
            name="description"
            className="rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 h-24 border-none w-80" // Added height & width
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Event Date:
          <input
            type="date"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none w-80" // Added width
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Event Time:
          <input
            type="time"
            name="eventTime"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none w-80" // Added width
            value={formData.eventTime}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Location:
          <input
            type="text"
            name="location"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none w-80" // Added width
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Image:
          <input
            type="file"
            name="image"
            className="rounded mt-2 pl-5 px-4 py-10 ring-sky-700 ring-2 h-12 border-none w-80" // Added width
            onChange={handleImageUpload}
          />
        </label>
        <button className="primary w-80" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
