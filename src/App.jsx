import React, { useState, useEffect } from 'react';
import { affirmations, calendarEvents, pinterestImages, articlesPsychology, articlesKids } from './data/content';
import { Heart, Calendar, BookOpen, Image as ImageIcon, Smile, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [dailyAffirmation, setDailyAffirmation] = useState('');

  useEffect(() => {
    // Случайная аффирмация дня для фоновых напоминаний (скрыта от общего каталога)
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setDailyAffirmation(affirmations[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B2B2B] flex flex-col font-sans">
      {/* Шапка */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#E2DDD5] sticky top-0 z-50 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-serif tracking-wide text-[#606C38] flex items-center gap-2">
            🌾 Счастливы на селе
          </h1>
          <div className="text-xs bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#E2DDD5] text-stone-600 italic">
            ✨ {dailyAffirmation}
          </div>
        </div>
      </header>

      {/* Основной контент по вкладкам */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 pb-24">
        {activeTab === 'feed' && (
          <div className="space-y-6">
            {/* Блог и VK интеграция */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2DDD5]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-serif font-medium">Лента и посты из ВКонтакте</h2>
                <span className="text-xs bg-[#E2DDD5] px-2.5 py-1 rounded-full text-stone-700">Видео & Блог</span>
              </div>
              <div className="aspect-video bg-stone-100 rounded-xl flex items-center justify-center text-stone-400 mb-4 border border-dashed border-[#E2DDD5]">
                [Видеорепортажи и свежие записи из группы ВК]
              </div>
              <p className="text-sm text-stone-600">Здесь автоматически подтягиваются самые теплые истории, видео и анонсы проекта.</p>
            </div>

            {/* Pinterest-эстетика (бесконечная лента с картинками) */}
            <div>
              <h3 className="text-md font-serif font-medium mb-3 flex items-center gap-2">
                <ImageIcon size={18} className="text-[#C48CB3]" /> Деревенская эстетика и уют
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pinterestImages.map((img) => (
                  <div key={img.id} className="bg-white p-3 rounded-2xl shadow-sm border border-[#E2DDD5] group overflow-hidden">
                    <img src={img.url} alt={img.title} className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition duration-300" />
                    <p className="text-xs text-stone-500 mt-2 text-center font-medium">{img.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2DDD5] space-y-4">
            <h2 className="text-lg font-serif font-medium flex items-center gap-2">
              <Calendar size={20} className="text-[#606C38]" /> Агро-календарь и женские даты
            </h2>
            <p className="text-sm text-stone-600">Календарь важных агрономических праздников и дней, посвященных женщинам на селе.</p>
            <div className="space-y-3 mt-4">
              {calendarEvents.map((ev, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5] flex justify-between items-center">
                  <div>
                    <span className="text-xs font-semibold text-[#C48CB3]">{ev.date}</span>
                    <h4 className="text-sm font-medium text-stone-800">{ev.title}</h4>
                  </div>
                  <span className="text-xs bg-white px-3 py-1 rounded-full border border-[#E2DDD5]">Праздник</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'psychology' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2DDD5] space-y-4">
            <h2 className="text-lg font-serif font-medium flex items-center gap-2">
              <Heart size={20} className="text-[#C48CB3]" /> Психологическая помощь
            </h2>
            <p className="text-sm text-stone-600">Мягкие советы, статьи и поддержка для душевного равновесия.</p>
            <div className="space-y-4 mt-4">
              {articlesPsychology.map((art, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5]">
                  <h3 className="font-medium text-stone-800 mb-1">{art.title}</h3>
                  <p className="text-xs text-stone-600">{art.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'kids' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2DDD5] space-y-4">
            <h2 className="text-lg font-serif font-medium flex items-center gap-2">
              <Smile size={20} className="text-[#D4A373]" /> Дети в деревне
            </h2>
            <p className="text-sm text-stone-600">Идеи для досуга, развития и счастливого детства на свежем воздухе.</p>
            <div className="space-y-4 mt-4">
              {articlesKids.map((art, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5]">
                  <h3 className="font-medium text-stone-800 mb-1">{art.title}</h3>
                  <p className="text-xs text-stone-600">{art.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Нижняя навигация */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#E2DDD5] py-3 px-4 z-50">
        <div className="max-w-md mx-auto flex justify-around">
          <button onClick={() => setActiveTab('feed')} className={`flex flex-col items-center text-xs ${activeTab === 'feed' ? 'text-[#606C38] font-medium' : 'text-stone-400'}`}>
            <Sparkles size={20} />
            <span>Лента</span>
          </button>
          <button onClick={() => setActiveTab('calendar')} className={`flex flex-col items-center text-xs ${activeTab === 'calendar' ? 'text-[#606C38] font-medium' : 'text-stone-400'}`}>
            <Calendar size={20} />
            <span>Календарь</span>
          </button>
          <button onClick={() => setActiveTab('psychology')} className={`flex flex-col items-center text-xs ${activeTab === 'psychology' ? 'text-[#606C38] font-medium' : 'text-stone-400'}`}>
            <Heart size={20} />
            <span>Психология</span>
          </button>
          <button onClick={() => setActiveTab('kids')} className={`flex flex-col items-center text-xs ${activeTab === 'kids' ? 'text-[#606C38] font-medium' : 'text-stone-400'}`}>
            <Smile size={20} />
            <span>Дети</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
