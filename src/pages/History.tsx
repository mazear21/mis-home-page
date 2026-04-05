import { ArrowRight, BookOpen, ChevronRight, Clock, Search, Target } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const institutes = [
  "Erbil Technical Engineering College",
  "Erbil Technical Administrative College",
  "Erbil Technology College",
  "Erbil Technical Health College",
  "Soran Technical College",
  "Shaqlawa Technical College",
  "Erbil Technical Administrative Institute",
  "Erbil Technical Medical Institute",
  "Khabat Technical Institute",
  "Koya Technical Institute",
  "Mergasor Technical Institute",
  "Choman Technical Institute"
];

export default function History() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#1a0f4a] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">History of EPU</h1>
          <div className="h-1 w-24 bg-[#ffb700] rounded-full mb-6"></div>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
            Discover the legacy, growth, and driving vision behind the Erbil Polytechnic University.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-8 flex flex-col gap-12">

          {/* About EPU */}
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><BookOpen size={120} /></div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 premium-heading">
              <div className="p-2 bg-white/10 text-[#ffb700] rounded-lg backdrop-blur-sm z-10 relative"><BookOpen size={24} /></div>
              About EPU
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="prose prose-lg premium-text w-full relative z-10">
                <p className="mb-4">
                  Erbil Polytechnic University is a scientific governmental academy which aims at educating technical qualified people in the various specialties to meet the needs of the society, as a non-profitable centre of education.
                </p>
                <p>
                  We develop human capacities and resources in technical fields, provide advisory services, and support scientific research and innovations to reach profession and new ideas on an advanced level.
                </p>
              </div>
            </div>
          </div>

{/* History */}
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><Clock size={120} /></div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 premium-heading">
              <div className="p-2 bg-white/10 text-[#ffb700] rounded-lg backdrop-blur-sm z-10 relative"><Clock size={24} /></div>
              History of EPU
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="history-uiverse-stack shrink-0 w-full md:w-1/3 mb-6 md:mb-0 relative z-10">
                  <div className="history-uiverse-card">
                    <div className="history-uiverse-image">
                      <div className="history-uiverse-stack shrink-0 w-full md:w-1/3 mb-6 md:mb-0 relative z-10">
                  <div className="history-uiverse-card">
                    <div className="history-uiverse-image">
                      <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Historic EPU moment"
                      />
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              <div className="prose prose-lg premium-text w-full md:w-2/3 relative z-10">
                <p className="mb-4">
                  The EPU is the offshoot of Foundation of Technical Education, which was founded by Kurdistan Parliament in 1993 under the name of Foundation of Technical Institutes. It started working effectively to run the Technical Institutes in 1996.
                </p>
                <p>
                  Formerly, these institutes were run by Foundation of Technical Education in Baghdad. In 2004, its name changed to Foundation of Technical Education and later on it became Erbil Polytechnic University by KRG in 2012.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-br from-[#1a0f4a] to-[#2c1c7a] rounded-2xl p-8 md:p-10 shadow-xl overflow-hidden relative text-white">
            <div className="absolute -right-10 -bottom-10 opacity-10"><Target size={200} /></div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"><Target size={24} /></div>
              Vision Statement
            </h2>
            <div className="grid gap-4">
              {[
                "Commitment to high-quality of learning, training and scientific events",
                "Promotion of a spirit of diversity of academic staff, as well as bringing together different abilities, views and skills",
                "Support for faculty and staff encouraging student creativity and innovation",
                "Creation of a safe, secure and a friendly environment for learning"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm">
                  <div className="mt-1 shrink-0 h-6 w-6 rounded-full bg-[#ffb700] flex items-center justify-center text-xs font-bold text-[#1a0f4a]">{i+1}</div>
                  <p className="text-lg leading-snug font-medium opacity-90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Search Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-400 mb-4">Search the Archives</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input 
                type="text" 
                placeholder="Search announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg pl-10 pr-4 py-3 outline-none focus:bg-white focus:ring-2 focus:ring-[#1a0f4a]/20 focus:border-[#1a0f4a] transition-all"
              />
            </div>
          </div>

          {/* Colleges & Institutes Publishing Portal */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <h3 className="text-lg font-bold text-gray-900">Colleges & Institutes</h3>
              <p className="text-sm text-gray-500 mt-1">Publishing & Announcements Portal</p>
            </div>
            
            <div className="p-2 flex-1 flex flex-col gap-1">
              <Link to="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#1a0f4a] font-medium transition-colors group">
                <span className="truncate">Presidency</span>
                <ChevronRight className="size-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
              
              {institutes.filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())).map((institute, idx) => (
                <Link to="#" key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-[#1a0f4a] text-sm transition-colors group">
                  <span className="truncate mr-3" title={institute}>{institute}</span>
                  <ChevronRight className="size-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
              
              {institutes.filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <div className="p-4 text-center text-sm text-gray-400">No matching departments found.</div>
              )}
            </div>

            <div className="p-6 bg-gray-50 mt-auto border-t border-gray-100 flex flex-col items-center justify-center text-center gap-3">
              <div className="size-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-1">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Are you an admin?</h4>
                <p className="text-xs text-gray-500 mt-1">Log in to publish announcements to your department's board.</p>
              </div>
              <button className="mt-2 text-sm font-semibold text-white bg-[#1a0f4a] hover:bg-[#2c1c7a] px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
                Go to Portal <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
