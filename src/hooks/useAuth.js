import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      register: (userData) => set({ user: userData, isAuthenticated: true }),
      updateUser: (userData) => set((state) => ({ user: { ...state.user, ...userData } })),
      // Guest login: creates a lightweight guest user and marks authenticated
      // Note: guest sessions are persisted by default by the existing middleware.
      // If you prefer guest sessions to be transient, we can store them only in-memory.
      loginGuest: (guestData = {}) =>
        set({ user: { name: 'Guest User', isGuest: true, ...guestData }, isAuthenticated: true }),
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
    }
  )
)

export default useAuth;
