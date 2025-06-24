import React from "react"

export const Component = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 shadow-2xl border-b-4 border-primary-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] opacity-15 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-pattern-stars"></div>

                <nav className="px-8 py-6 flex items-center justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-primary-300/20 to-primary-100/20 animate-pulse"></div>

                    <div className="flex items-center space-x-2 z-10 transform hover:scale-110 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                            <span className="text-white font-bold text-xl">🌙</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">DearLuna</h1>
                    </div>

                    <div className="flex items-center space-x-8 z-10">
                        <button className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30">
                            <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform duration-300">
                                edit
                            </span>
                            <span className="font-bold text-lg">편지쓰기</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30">
                            <span className="material-symbols-outlined text-2xl group-hover:bounce transition-transform duration-300">
                                mail
                            </span>
                            <span className="font-bold text-lg">우편함</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 to-primary-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30">
                            <span className="material-symbols-outlined text-2xl group-hover:rotate-45 transition-transform duration-300">
                                storefront
                            </span>
                            <span className="font-bold text-lg">상점</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>

                    <div className="z-10">
                        <button className="group relative w-16 h-16 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-4 border-white/50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-primary-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full group-hover:brightness-110 transition-all duration-300"
                                keywords="profile, user, avatar, person"
                            />
                            <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-yellow-300/50 transition-colors duration-300"></div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                        </button>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-500 via-primary-600 to-primary-700 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-700 via-primary-600 via-primary-500 to-primary-400 animate-pulse"></div>
                </nav>

                <div className="w-full max-w-4xl mx-auto my-8 px-8 py-10 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl border-4 border-primary-200 relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] opacity-10 bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 via-primary-200/20 to-primary-400/30"></div>
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 animate-pulse"></div>
                    <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-10 blur-xl"></div>

                    <h2 className="text-3xl font-bold text-primary-800 mb-6 flex items-center">
                        <span className="material-symbols-outlined mr-3 text-4xl animate-pulse">nightlight</span>
                        달님에게 보내는 편지
                    </h2>

                    <div className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-primary-700">오늘 있었던 일</label>
                            <textarea
                                className="w-full h-32 p-4 border-2 border-primary-200 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 shadow-inner hover:shadow-md"
                                placeholder="오늘 있었던 일을 자유롭게 적어보세요..."
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-primary-700">달님에게 묻고 싶은 것</label>
                            <textarea
                                className="w-full h-24 p-4 border-2 border-primary-200 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 shadow-inner hover:shadow-md"
                                placeholder="고민이나 질문을 적어보세요..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button className="group relative px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-primary-300/50 overflow-hidden">
                                <div className="absolute inset-0 bg-stars opacity-30 animate-twinkle"></div>
                                <span className="relative flex items-center">
                                    <span className="material-symbols-outlined mr-2 group-hover:rotate-12 transition-transform duration-300">
                                        send
                                    </span>
                                    달님에게 보내기
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto my-8 px-8 py-10 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-blue-900/90 rounded-3xl shadow-2xl border-4 border-indigo-400/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] opacity-20 bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-pattern-constellations opacity-30 mix-blend-luminosity"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,31,162,0.2),transparent_70%)]"></div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl font-bold text-white mb-6 text-center relative z-10 drop-shadow-glow flex justify-center">
                        <span className="material-symbols-outlined mr-3 text-yellow-300 animate-spin-slow">
                            auto_awesome
                        </span>
                        타로 카드를 선택하세요
                    </h2>

                    <div className="grid grid-cols-5 gap-4 perspective-1000">
                        {[1, 2, 3, 4, 5].map((card) => (
                            <div
                                key={card}
                                className="card-container h-64 cursor-pointer transform hover:scale-110 transition-all duration-500 hover:z-10"
                            >
                                <div className="card-inner w-full h-full relative preserve-3d transition-transform duration-1000 transform hover:rotate-y-180 animate-float">
                                    <div className="card-back absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-4 border-white/20 shadow-xl overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-yellow-300/30 flex items-center justify-center animate-pulse">
                                                <span className="material-symbols-outlined text-4xl text-white">
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto my-8 px-8 py-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-2xl border-4 border-primary-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdHxlbnwwfHx8fDE3NTA3MzQ4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080')] opacity-10 bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-transparent to-indigo-100/50"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>

                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        <div className="md:w-1/3">
                            <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                                <img
                                    src="https://images.unsplash.com/photo-1600429991827-5224817554f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmR8ZW58MHx8fHwxNzUwNzkxOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="The Star Tarot Card"
                                    className="w-full h-full object-cover"
                                    keywords="tarot card, the star, fortune telling, divination"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                    <h3 className="text-2xl font-bold text-white">The Star</h3>
                                </div>
                                <div className="absolute inset-0 border-8 border-primary-200/50 rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="md:w-2/3 space-y-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-primary-200/50">
                                <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">auto_awesome</span>
                                    타로 해석
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    선택하신 '별' 카드는 희망, 영감, 정신적 통찰력을 상징합니다. 현재 당신은 어두운
                                    시간을 지나고 있지만, 곧 밝은 빛이 찾아올 것입니다. 이 카드는 내면의 평화를 찾고,
                                    자신의 진정한 목적을 발견하는 시기가 왔음을 알려줍니다. 새로운 시작과 가능성의 문이
                                    열리고 있습니다.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary-50 via-white to-primary-50 p-6 rounded-2xl shadow-xl border-2 border-primary-200/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">nightlight</span>
                                    달님의 답장
                                </h3>
                                <p className="text-gray-700 leading-relaxed relative z-10">
                                    사랑하는 당신, 오늘 있었던 일들과 고민을 나누어 주어서 고마워요. 당신이 느끼는
                                    불안감은 자연스러운 것이에요. 하지만 '별' 카드가 보여주듯, 당신의 앞날에는 밝은 빛이
                                    기다리고 있어요. 지금은 스스로를 믿고, 내면의 목소리에 귀 기울일 때입니다. 당신의
                                    직감을 믿으세요. 그리고 작은 기쁨을 놓치지 말고 매일의 축복에 감사하는 마음을
                                    가져보세요. 달빛이 당신의 길을 비춰줄 거예요.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-6 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 rounded-2xl shadow-lg border-2 border-primary-200/50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,31,162,0.05),transparent_70%)]"></div>
                        <h3 className="text-xl font-bold text-primary-800 mb-4">추천 질문</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                            <button className="p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg border-2 border-primary-200/30 transform hover:scale-105 transition-all duration-300 text-left">
                                <p className="text-primary-700 font-medium">
                                    제가 더 자신감을 가질 수 있는 방법이 있을까요?
                                </p>
                            </button>
                            <button className="p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg border-2 border-primary-200/30 transform hover:scale-105 transition-all duration-300 text-left">
                                <p className="text-primary-700 font-medium">
                                    앞으로 3개월 내에 중요한 변화가 있을까요?
                                </p>
                            </button>
                            <button className="p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg border-2 border-primary-200/30 transform hover:scale-105 transition-all duration-300 text-left">
                                <p className="text-primary-700 font-medium">
                                    지금의 결정이 미래에 어떤 영향을 미칠까요?
                                </p>
                            </button>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="group px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-primary-300/50">
                                <span className="flex items-center">
                                    <span className="material-symbols-outlined mr-2 group-hover:rotate-12 transition-transform duration-300">
                                        add_circle
                                    </span>
                                    추가로 질문하기
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .drop-shadow-glow {
                        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                    }
                    .perspective-1000 {
                        perspective: 1000px;
                    }
                    .preserve-3d {
                        transform-style: preserve-3d;
                    }
                    .backface-hidden {
                        backface-visibility: hidden;
                    }
                    .rotate-y-180 {
                        transform: rotateY(180deg);
                    }
                    @keyframes float {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }
                    .animate-float {
                        animation: float 3s ease-in-out infinite;
                    }
                    @keyframes spin-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 10s linear infinite;
                    }
                    @keyframes twinkle {
                        0%,
                        100% {
                            opacity: 0.3;
                        }
                        50% {
                            opacity: 0.8;
                        }
                    }
                    .animate-twinkle {
                        animation: twinkle 2s ease-in-out infinite;
                    }
                    .bg-stars {
                        background-image: radial-gradient(circle, white 1px, transparent 1px);
                        background-size: 15px 15px;
                    }
                    .bg-pattern-stars {
                        background-image:
                            radial-gradient(circle, white 1px, transparent 1px),
                            radial-gradient(circle, white 1px, transparent 1px);
                        background-size:
                            40px 40px,
                            20px 20px;
                        background-position:
                            0 0,
                            20px 20px;
                    }
                    .bg-pattern-constellations {
                        background-image:
                            radial-gradient(circle, white 1px, transparent 2px),
                            linear-gradient(to right, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%),
                            linear-gradient(to bottom, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%);
                        background-size:
                            40px 40px,
                            40px 40px,
                            40px 40px;
                        background-position:
                            0 0,
                            0 0,
                            0 0;
                    }
                `}</style>
            </div>
        </div>
    )
}
