import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
    BookOpen, LogIn, Shield, GraduationCap, User, ArrowRight,
    Users, BarChart3, Mail, Lock, Eye, EyeOff, AlertCircle, ShieldCheck, Sparkles
} from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loadingRole, setLoadingRole] = useState(null);
    const [isManualLoading, setIsManualLoading] = useState(false);

    const isAnyLoading = isManualLoading || loadingRole !== null;

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setError('');
        setIsManualLoading(true);
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setIsManualLoading(false);
        }
    };

    const handleQuickLogin = async (userEmail, userPassword, roleName) => {
        if (isAnyLoading) return;
        setEmail(userEmail);
        setPassword(userPassword);
        setError('');
        setLoadingRole(roleName);
        try {
            await login(userEmail, userPassword);
            navigate('/dashboard');
        } catch (err) {
            setError(`Login failed for ${roleName}. Please verify credentials or backend.`);
        } finally {
            setLoadingRole(null);
        }
    };

    const demoCredentials = [
        {
            role: 'ADMIN',
            email: 'admin@learnify.edu',
            password: 'password123',
            icon: Shield,
            badgeStyle: 'bg-purple-900/50 border border-purple-500/40 text-purple-400',
            cardHover: 'hover:border-purple-500/60 hover:bg-[#162238]',
            btnStyle: 'bg-purple-600 hover:bg-purple-500 text-white'
        },
        {
            role: 'TEACHER',
            email: 'neha@teacher.learnify.edu',
            password: 'teacher123',
            icon: GraduationCap,
            badgeStyle: 'bg-blue-900/50 border border-blue-500/40 text-blue-400',
            cardHover: 'hover:border-blue-500/60 hover:bg-[#162238]',
            btnStyle: 'bg-blue-600 hover:bg-blue-500 text-white'
        },
        {
            role: 'STUDENT',
            email: 'amit@gmail.com',
            password: '123456',
            icon: User,
            badgeStyle: 'bg-emerald-900/50 border border-emerald-500/40 text-emerald-400',
            cardHover: 'hover:border-emerald-500/60 hover:bg-[#162238]',
            btnStyle: 'bg-emerald-600 hover:bg-emerald-500 text-white'
        }
    ];

    return (
        <div className="min-h-screen min-h-dvh lg:h-screen lg:max-h-screen bg-[#F3F6FC] relative overflow-y-auto lg:overflow-hidden flex flex-col justify-between font-sans">
            {/* Background Decorative Soft Gradients & Mesh Shapes */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-indigo-50/60 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            {/* Top Navigation Bar - Responsive Header */}
            <header className="w-full px-4 sm:px-8 py-2.5 lg:py-2.5 bg-white/80 backdrop-blur-2xl border-b border-slate-200/80 shadow-xs shrink-0 z-20 sticky top-0">
                <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                    {/* Brand Logo & Tagline */}
                    <div className="flex items-center space-x-2.5 sm:space-x-3">
                        <div className="p-1.5 lg:p-2 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-xl shadow-md shadow-blue-500/25 flex items-center justify-center shrink-0">
                            <BookOpen size={18} className="stroke-[2.5] lg:w-5 lg:h-5" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg lg:text-xl font-black text-slate-900 tracking-tight">
                                Lernify
                            </span>
                            <span className="hidden sm:inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] lg:text-xs font-bold rounded-full border border-blue-100">
                                E-Learning Platform
                            </span>
                        </div>
                    </div>

                    {/* Right Action / System Status Badge */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-slate-100/80 rounded-full border border-slate-200 text-xs lg:text-sm font-medium text-slate-600">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>All Systems Operational</span>
                        </div>
                        <a
                            href="mailto:amitofficialcs@gmail.com"
                            className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-blue-600 px-2.5 sm:px-3 py-1 rounded-lg hover:bg-slate-100/80 transition-colors flex items-center gap-1.5"
                        >
                            <Mail size={14} className="text-blue-600 shrink-0 lg:w-4 lg:h-4" />
                            <span className="hidden sm:inline">Help & Support</span>
                            <span className="sm:hidden text-xs font-bold">Help</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center flex-grow py-4 lg:py-1 my-auto">

                {/* LEFT COLUMN: Branding & Info */}
                <div className="lg:col-span-6 space-y-3 lg:space-y-3.5 max-w-lg lg:max-w-xl mx-auto lg:mx-0 w-full order-2 lg:order-1">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/80 border border-blue-200/60 rounded-full text-blue-600 text-xs lg:text-sm font-extrabold shadow-2xs mb-2 backdrop-blur-xs">
                            <Sparkles size={14} className="text-blue-500 fill-blue-500/20 lg:w-4 lg:h-4" />
                            <span>Next-Gen E-Learning Platform</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-black text-slate-900 leading-tight tracking-tight">
                            Welcome back to <br className="hidden sm:block" />
                            <span className="text-blue-600 relative inline-block">
                                Lernify
                                <span className="absolute left-0 bottom-0.5 w-full h-2 lg:h-2.5 bg-blue-500/30 rounded-full"></span>
                            </span>
                        </h1>
                        <p className="mt-1.5 text-xs sm:text-sm lg:text-[16px] text-slate-600 leading-relaxed font-semibold">
                            Your all-in-one platform for seamless learning, teaching, and student engagement.
                        </p>
                    </div>

                    {/* 3 Feature Highlight Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 lg:gap-3">
                        <div className="flex items-center p-2.5 lg:p-3 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all">
                            <div className="p-2 lg:p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg lg:rounded-xl mr-3 shrink-0 shadow-xs shadow-blue-500/20">
                                <GraduationCap size={18} className="lg:w-5 lg:h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm lg:text-[15px] font-black text-slate-900">Smart Learning</h4>
                                <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-500 mt-0.5 font-medium">Access interactive courses & live classes</p>
                            </div>
                        </div>

                        <div className="flex items-center p-2.5 lg:p-3 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all">
                            <div className="p-2 lg:p-2.5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-lg lg:rounded-xl mr-3 shrink-0 shadow-xs shadow-emerald-500/20">
                                <Users size={18} className="lg:w-5 lg:h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm lg:text-[15px] font-black text-slate-900">For Everyone</h4>
                                <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-500 mt-0.5 font-medium">Students, Teachers & Admins unified</p>
                            </div>
                        </div>

                        <div className="flex items-center p-2.5 lg:p-3 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all">
                            <div className="p-2 lg:p-2.5 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-lg lg:rounded-xl mr-3 shrink-0 shadow-xs shadow-purple-500/20">
                                <BarChart3 size={18} className="lg:w-5 lg:h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm lg:text-[15px] font-black text-slate-900">Insights & Analytics</h4>
                                <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-500 mt-0.5 font-medium">Track progress & performance easily</p>
                            </div>
                        </div>
                    </div>

                    {/* Laptop & Books Visual Asset Section */}
                    <div className="pt-0.5 relative hidden lg:block">
                        <div className="flex items-end gap-2.5">
                            {/* Plant Pot & Books Stack */}
                            <div className="flex items-end gap-1 mb-0.5 shrink-0">
                                {/* Plant */}
                                <div className="w-4 h-8 relative flex flex-col items-center">
                                    <div className="w-3.5 h-4 bg-slate-200 rounded-b-md border border-slate-300"></div>
                                    <div className="absolute -top-1 flex gap-0.5">
                                        <div className="w-1 h-2.5 bg-emerald-500 rounded-full rotate-[-20deg]"></div>
                                        <div className="w-1 h-3 bg-emerald-600 rounded-full"></div>
                                        <div className="w-1 h-2.5 bg-emerald-500 rounded-full rotate-[20deg]"></div>
                                    </div>
                                </div>
                                {/* Stacked Books */}
                                <div className="space-y-0.5">
                                    <div className="w-14 h-2 bg-sky-400 rounded-xs shadow-xs border-b border-sky-600"></div>
                                    <div className="w-16 h-2 bg-indigo-500 rounded-xs shadow-xs border-b border-indigo-700"></div>
                                    <div className="w-20 h-2 bg-emerald-400 rounded-xs shadow-xs border-b border-emerald-600"></div>
                                </div>
                            </div>

                            {/* Laptop Graphic Container */}
                            <div className="flex-grow max-w-[210px] bg-slate-900 p-1 rounded-t-lg shadow-lg border-t border-x border-slate-700">
                                <div className="bg-slate-950 p-1 rounded-t-md overflow-hidden border border-slate-800">
                                    {/* Simulated Dashboard UI Header */}
                                    <div className="flex items-center justify-between border-b border-slate-800 pb-0.5 mb-1 px-1">
                                        <div className="flex items-center gap-0.5">
                                            <div className="w-1 h-1 rounded-full bg-red-500"></div>
                                            <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                                            <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                            <span className="text-[6.5px] text-slate-500 ml-1 font-mono">lernify.tech</span>
                                        </div>
                                        <div className="w-6 h-0.5 bg-blue-500/40 rounded-full"></div>
                                    </div>

                                    {/* Dashboard Mock Grid */}
                                    <div className="grid grid-cols-3 gap-0.5 mb-1">
                                        <div className="bg-slate-800/80 p-0.5 rounded border border-slate-700">
                                            <div className="w-3 h-0.5 bg-blue-500 rounded mb-0.5"></div>
                                            <div className="w-5 h-1 bg-blue-400/20 rounded"></div>
                                        </div>
                                        <div className="bg-slate-800/80 p-0.5 rounded border border-slate-700">
                                            <div className="w-3 h-0.5 bg-purple-500 rounded mb-0.5"></div>
                                            <div className="w-5 h-1 bg-purple-400/20 rounded"></div>
                                        </div>
                                        <div className="bg-slate-800/80 p-0.5 rounded border border-slate-700">
                                            <div className="w-3 h-0.5 bg-emerald-500 rounded mb-0.5"></div>
                                            <div className="w-5 h-1 bg-emerald-400/20 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Chart area */}
                                    <div className="bg-slate-900 p-0.5 rounded border border-slate-800 flex items-end justify-between h-6 px-1">
                                        <div className="w-1.5 bg-blue-500 h-3 rounded-t"></div>
                                        <div className="w-1.5 bg-blue-400 h-5 rounded-t"></div>
                                        <div className="w-1.5 bg-blue-600 h-2 rounded-t"></div>
                                        <div className="w-1.5 bg-indigo-500 h-4 rounded-t"></div>
                                        <div className="w-1.5 bg-blue-500 h-3 rounded-t"></div>
                                    </div>
                                </div>
                                <div className="h-0.5 bg-slate-800 rounded-b-sm border-t border-slate-700 flex justify-center items-center">
                                    <div className="w-3 h-0.5 bg-slate-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Dark Floating Login Card */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
                    <div className="bg-[#0B1528] text-white px-5 py-3.5 sm:px-6 sm:py-4 lg:px-6 lg:py-4 rounded-2xl lg:rounded-2xl shadow-2xl border border-slate-800/80 w-full max-w-[410px] sm:max-w-[420px] lg:max-w-[425px] relative overflow-hidden shrink-0 mx-auto lg:ml-auto lg:mr-[5rem]">
                        {/* Subtle inner background ambient light */}
                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Card Header */}
                        <div className="text-center mb-2 lg:mb-2.5">
                            <div className="inline-flex justify-center items-center p-1.5 lg:p-2 bg-white text-blue-600 rounded-full shadow-md shadow-blue-500/20 mb-1">
                                <BookOpen size={16} className="stroke-[2.5] lg:w-5 lg:h-5" />
                            </div>
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight leading-tight">
                                Sign in to <span className="text-blue-500">Lernify</span>
                            </h2>

                            <p className="text-[11px] lg:text-xs text-slate-400 mt-0.5 font-normal">
                                Empowering learning with modern education tools
                            </p>
                        </div>

                        {/* Error Alert Message */}
                        {error && (
                            <div className="mb-2 bg-red-950/40 border border-red-800/60 text-red-300 px-2.5 py-1 rounded-lg text-[11px] lg:text-xs flex items-center gap-1.5">
                                <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Login Form */}
                        <form className="space-y-2 lg:space-y-2.5" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div>
                                <label className="block text-[11px] lg:text-xs font-bold text-slate-300 mb-0.5">
                                    Email address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-2.5 lg:pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Mail size={13} className="lg:w-4 lg:h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email@domain.com"
                                        className="w-full pl-8 lg:pl-9 pr-2.5 py-1.5 sm:py-2 lg:py-2 bg-[#17243B] border border-slate-700/70 rounded-lg text-xs lg:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-[11px] lg:text-xs font-bold text-slate-300 mb-0.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-2.5 lg:pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Lock size={13} className="lg:w-4 lg:h-4" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-8 lg:pl-9 pr-8 py-1.5 sm:py-2 lg:py-2 bg-[#17243B] border border-slate-700/70 rounded-lg text-xs lg:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-2.5 lg:pr-3 flex items-center text-slate-400 hover:text-slate-200 transition cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={13} className="lg:w-4 lg:h-4" /> : <Eye size={13} className="lg:w-4 lg:h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember me & Forgot password */}
                            <div className="flex items-center justify-between gap-2 pt-0.5">
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={e => setRememberMe(e.target.checked)}
                                        className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded bg-[#17243B] border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer"
                                    />
                                    <span className="text-[11px] lg:text-xs text-slate-300 font-medium">Remember me</span>
                                </label>
                                <a href="#forgot" className="text-[11px] lg:text-xs text-slate-400 hover:text-blue-400 transition font-semibold">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isAnyLoading}
                                className="w-full mt-0.5 py-1.5 sm:py-2 lg:py-2 px-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold text-xs lg:text-sm rounded-lg shadow-sm shadow-blue-600/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-85 disabled:cursor-wait min-h-[34px] sm:min-h-[38px]"
                            >
                                {isManualLoading ? (
                                    <div className="flex items-center justify-center gap-1.5 py-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                ) : (
                                    <>
                                        <LogIn size={14} className="lg:w-4 lg:h-4" />
                                        Sign in
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-2 lg:my-2 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-800"></div>
                            </div>
                            <span className="relative px-2 bg-[#0B1528] text-[10px] lg:text-xs font-semibold text-slate-400 tracking-wide">
                                or sign in with demo accounts
                            </span>
                        </div>

                        {/* Demo Accounts List */}
                        <div className="space-y-1 lg:space-y-1">
                            {demoCredentials.map((demo) => {
                                const IconComponent = demo.icon;
                                const isThisLoading = loadingRole === demo.role;
                                return (
                                    <div
                                        key={demo.role}
                                        onClick={() => !isAnyLoading && handleQuickLogin(demo.email, demo.password, demo.role)}
                                        className={`group p-1.5 sm:p-1.5 lg:p-2 rounded-lg border border-slate-800 bg-[#142036]/70 ${isAnyLoading ? 'opacity-60 cursor-not-allowed' : `${demo.cardHover} cursor-pointer`} transition-all duration-200 flex items-center justify-between gap-2`}
                                    >
                                        <div className="flex items-center space-x-2 min-w-0 overflow-hidden">
                                            <div className={`p-1 lg:p-1.5 rounded-full ${demo.badgeStyle} shrink-0`}>
                                                <IconComponent size={12} className="lg:w-3.5 lg:h-3.5" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="text-[9.5px] lg:text-[11px] font-extrabold uppercase tracking-wider text-slate-100 truncate">
                                                    {demo.role}
                                                </div>
                                                <div className="text-[10px] lg:text-xs text-slate-200 truncate">
                                                    {demo.email}
                                                </div>
                                                <div className="text-[8.5px] lg:text-[10px] text-slate-400 font-mono truncate">
                                                    Pass: {demo.password}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (!isAnyLoading) handleQuickLogin(demo.email, demo.password, demo.role);
                                            }}
                                            disabled={isAnyLoading}
                                            className={`text-[10px] lg:text-xs font-bold px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-md transition-all flex items-center justify-center gap-0.5 shrink-0 ${demo.btnStyle} cursor-pointer disabled:opacity-85 disabled:cursor-wait min-w-[62px] min-h-[26px]`}
                                        >
                                            {isThisLoading ? (
                                                <div className="flex items-center justify-center gap-1 py-1 px-1">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                                </div>
                                            ) : (
                                                <>
                                                    Login <ArrowRight size={10} className="lg:w-3 lg:h-3 group-hover:translate-x-0.5 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Footer Security Badge */}
                        <div className="mt-2 pt-0.5 text-center flex items-center justify-center gap-1 text-[10px] lg:text-xs text-slate-400">
                            <ShieldCheck size={12} className="text-emerald-400 shrink-0 lg:w-3.5 lg:h-3.5" />
                            <span>Secure & trusted platform for modern education</span>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
};

export default Login;
