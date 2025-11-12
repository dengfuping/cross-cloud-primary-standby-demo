import { useState } from "react";
import PrimaryBackupSwitch from "./components/PrimaryBackupSwitch";
import DisasterRecovery from "./components/DisasterRecovery";

type TabType = "primary-backup" | "disaster";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("primary-backup");
  const [primaryBackupResetTrigger] = useState(0);

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-start justify-center p-4 sm:p-6 overflow-auto">
      <div className="w-full max-w-[940px]">
        {/* Tab 切换区域 */}
        <div className="mb-6">
          <div className="flex gap-[32px] border-b border-[#e8e8e8]">
            <button
              onClick={() => setActiveTab("primary-backup")}
              className={`pb-[12px] transition-all relative ${
                activeTab === "primary-backup"
                  ? "text-[#0958D9]"
                  : "text-[#8C8C8C] hover:text-[#595959]"
              }`}
            >
              主备切换
              {activeTab === "primary-backup" && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#0958D9]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("disaster")}
              className={`pb-[12px] transition-all relative ${
                activeTab === "disaster"
                  ? "text-[#0958D9]"
                  : "text-[#8C8C8C] hover:text-[#595959]"
              }`}
            >
              容灾切换
              {activeTab === "disaster" && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#0958D9]" />
              )}
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
          {activeTab === "primary-backup" && (
            <PrimaryBackupSwitch resetTrigger={primaryBackupResetTrigger} />
          )}
          {activeTab === "disaster" && <DisasterRecovery />}
        </div>
      </div>

      <style>{`
        @media (max-width: 940px) {
          .w-full.max-w-\\[940px\\] div[class*="scale-"] {
            --scale: calc(min(100vw - 2rem, 940px) / 940) !important;
          }
        }
        
        @media (min-width: 941px) {
          .w-full.max-w-\\[940px\\] div[class*="scale-"] {
            --scale: 1 !important;
          }
        }
        
        @media (max-width: 640px) {
          .w-full.max-w-\\[940px\\] div[class*="scale-"] {
            --scale: calc((100vw - 2rem) / 940) !important;
          }
        }
      `}</style>
    </div>
  );
}
