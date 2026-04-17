import React from "react";

const TicketList = ({ tickets = [], onViewDetails }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-indigo-600 pl-4">
        All Customer Tickets ({tickets.length})
      </h2>

      {/* কার্ড গ্রিড লেআউট */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
          >
            {/* কার্ডের উপরের অংশ (Priority Badge) */}
            <div className="p-5 flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                  {ticket.id}
                </span>
                <span
                  className={`text-[10px] px-3 py-1 rounded-full font-bold tracking-wider ${
                    ticket.priority === "HIGH PRIORITY"
                      ? "bg-red-100 text-red-600"
                      : ticket.priority === "MEDIUM PRIORITY"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {ticket.priority}
                </span>
              </div>

              {/* ইস্যু এবং ডেসক্রিপশন */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {ticket.login_issues}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {ticket.p_tag}
              </p>
            </div>

            {/* কার্ডের নিচের অংশ (User Info & Date) */}
            <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full `bg-gradient-to-tr` from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {ticket.name ? ticket.name.charAt(0) : "U"}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-none">
                    {ticket.name}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {ticket.date}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onViewDetails(ticket)}
                className="text-xs font-bold text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
