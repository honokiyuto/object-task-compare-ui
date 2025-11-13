import { useState } from 'react';
import { Repeat } from 'lucide-react';
import TaskOrientedUI from './TaskOrientedUI';
import ObjectOrientedUI from './ObjectOrientedUI';

type UIMode = 'task' | 'object';

export default function App() {
  const [uiMode, setUiMode] = useState<UIMode>('task');

  const toggleUI = () => {
    setUiMode((prev) => (prev === 'task' ? 'object' : 'task'));
  };

  return (
    <div className="relative min-h-screen">
      {/* メインUI */}
      {uiMode === 'task' ? <TaskOrientedUI /> : <ObjectOrientedUI />}

      {/* UI切り替えボタン（右下に浮遊） */}
      <button
        onClick={toggleUI}
        className="fixed bottom-6 left-0 text-white p-4 rounded-r-full bg-gray-400 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center z-50"
        aria-label="UI切り替え"
        title={`${uiMode === 'task' ? 'Object-Oriented' : 'Task-Oriented'} UIに切り替え`}
      >
        <Repeat className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
      </button>
    </div>
  );
}
