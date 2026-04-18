import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import TicketList from "./TicketList";
import Footer from "./TempFooter";

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  // Resolve Function
  const handleMarkAsResolved = (task) => {
    setResolvedTasks([...resolvedTasks, task]);
    setSelectedTask(null);
  };

  useEffect(() => {
    fetch("Tickets.json") // শুরুতে / সরিয়ে দিন
      .then((res) => {
        if (!res.ok) throw new Error("JSON ফাইলটি পাওয়া যায়নি");
        return res.json();
      })
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // এই ফাংশনের নাম এবং নিচের প্রপসের নাম একই হতে হবে
  const handleTaskSelect = (ticket) => {
    setSelectedTask(ticket);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Banner tickets={tickets} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2">
          <TicketList tickets={tickets} onViewDetails={handleTaskSelect} />
        </div>

        {/* ডানপাশ */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-6">
            {/* Task Status Section */}
            <h2 className="text-xl font-bold text-[#1a2e44] mb-3">
              Task Status
            </h2>
            {!selectedTask ? (
              <p className="text-gray-400 text-sm">
                Select a ticket to add to Task Status
              </p>
            ) : (
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-900">
                  {selectedTask.login_issues}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {selectedTask.p_tag}
                </p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleMarkAsResolved(selectedTask)}
                    className="bg-indigo-600 text-white text-xs px-3 py-2 rounded-lg font-bold hover:bg-indigo-700"
                  >
                    Mark as Resolved
                  </button>
                  <button
                    onClick={() => setSelectedTask(null)}
                    className="text-gray-400 text-xs font-bold hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}

            {/* Resolved Task Section */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold text-[#1a2e44] mb-3">
                Resolved Task ({resolvedTasks.length})
              </h2>

              {resolvedTasks.length === 0 ? (
                <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
              ) : (
                <div className="space-y-3">
                  {resolvedTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-lg"
                    >
                      <div className="bg-green-500 text-white rounded-full p-1">
                        <svg
                          xmlns="http://w3.org"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-green-800 line-clamp-1">
                        {task.login_issues}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>;
    </div>
  );
}

export default App;
