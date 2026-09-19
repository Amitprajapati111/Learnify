import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BookOpen, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, title }) => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!user) return null;

    const isActive = (path) => location.pathname === path;

    // Close mobile sidebar whenever route changes
    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    // Prevent body scrolling when mobile sidebar is open
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarOpen]);

    const handleLogout = () => {
        setSidebarOpen(false);
        logout();
    };

    return (
        <div className="min-h-screen w-full bg-slate-50 flex overflow-x-hidden">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-[2px] md:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:static inset-y-0 left-0 z-50
                    w-72 md:w-64
                    bg-slate-900 text-white
                    flex flex-col shrink-0
                    transform transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >

                {/* Sidebar Header */}
                <div className="p-5 sm:p-6 flex items-center justify-between mb-1 shrink-0">
                    <div className="flex items-center space-x-3 min-w-0">
                        <BookOpen className="text-primary-500 shrink-0" size={24} />
                        <span className="text-xl font-bold truncate">
                            Lernify
                        </span>
                    </div>

                    {/* Mobile Close Button */}
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 sm:px-4 space-y-1.5 overflow-y-auto overflow-x-hidden">

                    {/* Admin */}
                    {user.role === 'admin' && (
                        <>
                            <div className="pt-5 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Admin Portal
                            </div>

                            <Link
                                to="/admin/users"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/admin/users')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Manage Users
                            </Link>

                            <Link
                                to="/admin/academic"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/admin/academic')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Academic Structure
                            </Link>

                            <Link
                                to="/admin/courses"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/admin/courses')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Global Courses
                            </Link>

                            <Link
                                to="/admin/live-classes"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/admin/live-classes')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Global Live Sessions
                            </Link>

                            <Link
                                to="/admin/reports"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/admin/reports')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Reports
                            </Link>

                            <div className="pt-5 pb-1 px-4"></div>
                        </>
                    )}

                    {/* Student */}
                    {user.role === 'student' && (
                        <>
                            <div className="pt-5 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Student Portal
                            </div>

                            <Link
                                to="/student/subjects"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/student/subjects')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Enrolled Subjects
                            </Link>

                            <Link
                                to="/student/materials"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/student/materials')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Study Materials
                            </Link>

                            <Link
                                to="/student/assessments"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/student/assessments')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Exams & Assignments
                            </Link>

                            <div className="pt-5 pb-1 px-4"></div>
                        </>
                    )}

                    {/* Teacher */}
                    {user.role === 'teacher' && (
                        <>
                            <div className="pt-5 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Teacher Portal
                            </div>

                            <Link
                                to="/teacher/courses"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/teacher/courses')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Course Management
                            </Link>

                            <Link
                                to="/teacher/evaluation"
                                className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                                    isActive('/teacher/evaluation')
                                        ? 'bg-primary-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                Evaluation
                            </Link>

                            <div className="pt-5 pb-1 px-4"></div>
                        </>
                    )}

                    {/* General */}
                    <div className="pt-2 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        General
                    </div>

                    <Link
                        to="/dashboard"
                        className={`block px-4 py-2.5 rounded-md transition text-sm font-medium ${
                            isActive('/dashboard')
                                ? 'bg-primary-600 text-white'
                                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        Dashboard
                    </Link>
                </nav>

                {/* User Section */}
                <div className="p-4 border-t border-slate-800 mt-2 shrink-0">
                    <div className="text-sm font-medium text-slate-300 mb-1 px-4 truncate">
                        {user.name}
                    </div>

                    <div className="text-xs text-slate-500 mb-4 px-4 capitalize">
                        {user.role}
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-md transition"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0 min-h-screen flex flex-col overflow-x-hidden">

                {/* Header */}
                <header className="bg-white shadow-sm border-b border-slate-200 shrink-0">

                    <div className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 flex items-center gap-3">

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden shrink-0 p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
                            aria-label="Open menu"
                            aria-expanded={sidebarOpen}
                        >
                            <Menu size={24} />
                        </button>

                        {/* Page Title */}
                        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight truncate">
                            {title || `Welcome back, ${user.name}`}
                        </h1>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 min-w-0 p-4 sm:p-5 md:p-8 overflow-y-auto overflow-x-hidden">

                    <div className="w-full max-w-7xl mx-auto min-w-0">
                        {children}
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Layout;