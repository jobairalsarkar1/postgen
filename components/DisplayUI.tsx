import {
  FileText,
  LayoutDashboard,
  Plus,
  Settings,
  SquareSquare,
} from "lucide-react";
import React from "react";

const DisplayUI = () => {
  return (
    <div className="relative hidden sm:flex justify-center lg:justify-end mt-24 lg:mt-0">
      {/* Glowing Base */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-[45%] translate-y-1/2 w-[700px] h-[220px] rounded-full dark-glow animate-pulse-soft z-0" />
      {/* Display UI */}
      <div className="relative w-[620px] aspect-[16/9] sm:aspect-[16/10] bg-gray-900 border-8 border-gray-700 rounded-2xl text-white text-xs transform scale-[0.95] origin-top z-10 hover:scale-[1] transition-transform duration-500 ease-out shadow-[0_20px_40px_rgba(0,0,0,0.25),0_10px_20px_rgba(0,0,0,0.15)] dark:shadow-none">
        <div className="h-full grid grid-cols-12 z-20">
          {/* Sidebar */}
          <aside className="col-span-3 bg-gray-800 flex flex-col justify-between p-3 rounded-l-lg">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <div className="w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <SquareSquare className="w-2 h-2 text-white" />
                </div>
                <span className="text-[9px] sm:text-sm tracking-tight font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  PostGen AI
                </span>
              </div>

              <nav className="space-y-2 text-gray-300 text-[8px] sm:text-[11px]">
                {[
                  { icon: LayoutDashboard, label: "Dashboard" },
                  { icon: FileText, label: "My Posts" },
                  { icon: Settings, label: "Settings" },
                ].map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-1 hover:text-white cursor-pointer"
                  >
                    <Icon className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </nav>
            </div>

            <div className="mt-4 bg-gray-700 rounded-lg p-2 flex items-center space-x-2 text-[9px]">
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center font-bold text-white text-[8px]">
                AJ
              </div>
              <div>
                <div className="font-semibold text-white leading-tight">
                  Alex J.
                </div>
                <div className="text-gray-300 text-[8px]">Product Designer</div>
              </div>
            </div>
          </aside>

          {/* Main Area */}
          <main className="col-span-9 flex flex-col h-full">
            {/* Conversation Content */}
            <div className="flex-1 px-3 py-3 bg-gray-850 overflow-y-auto space-y-3">
              {/* Prompt 1 */}
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-gradient-to-br from-blue-600 to-blue-500 text-white p-3 rounded-lg text-[10px] shadow-md">
                  Announce new role as Data Scientist at Google.
                </div>
              </div>

              {/* Response 1 */}
              <div className="flex justify-start">
                <div className="max-w-[75%] bg-gray-800 border border-gray-700 text-white p-3 rounded-lg text-[10px] shadow-md">
                  <p className="leading-tight">
                    Thrilled to join{" "}
                    <span className="text-blue-400">@Google</span> as a Data
                    Scientist!
                    <br />
                    Excited for what’s ahead. #Google #NewRole
                  </p>
                </div>
              </div>

              {/* Prompt 2 */}
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-gradient-to-br from-blue-600 to-blue-500 text-white p-3 rounded-lg text-[10px] shadow-md">
                  Share excitement about speaking at a tech conference.
                </div>
              </div>

              {/* Response 2 (Generating Placeholder) */}
              <div className="flex justify-start">
                <div className="max-w-[75%] bg-gray-800 border border-gray-700 text-white p-3 rounded-lg text-[10px] shadow-md">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full bounce-dot"
                      style={{ animationDelay: "0s" }}
                    />
                    <div
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full bounce-dot"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full bounce-dot"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Input */}
            <footer className="px-3 py-2 bg-gray-850 border-t border-gray-700">
              <form className="flex items-center bg-gray-700/50 backdrop-blur-md border border-gray-600 rounded-lg px-3 py-1.5 space-x-2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-all duration-300">
                <Plus className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="Type prompt..."
                  className="flex-1 bg-transparent placeholder-gray-400 text-white text-[10px] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 px-3 py-1.5 text-[9px] rounded-lg font-medium text-white shadow-md transition-all duration-300"
                >
                  Generate
                </button>
              </form>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DisplayUI;
