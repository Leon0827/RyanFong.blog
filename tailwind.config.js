module.exports = {
  content: ['./src/*.tsx'],
  theme: {
    extend: {
      animation: {
        titleFocus: 'titleFocus 0.6s linear both',
        heartBeat: 'heartBeat 1.5s ease-in-out both',
        textPopUpTop:
          'textPopUpTop 0.3s linear both',
      },
      keyframes: {
        titleFocus: {
          '0%': { filter: 'blur(12px)', opacity: 0 },
          '100%': { filter: 'blur(0)', opacity: 1 },
        },
        heartBeat: {
          '0%': {
            transform: 'scale(1)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-out',
          },
          '10%': {
            transform: 'scale(0.91)',
            animationTimingFunction: 'ease-in',
          },
          '17%': {
            transform: 'scale(0.98)',
            animationTimingFunction: 'ease-out',
          },
          '33%': {
            transform: 'scale(0.87)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-out',
          },
        },
        textPopUpTop: {
          '0%': {
            transform: 'translateY(0)',
            textShadow: 'none',
          },
          '100%': {
            transform: 'translateY(-2px)',
            transformOrigin: '50% 50%',
            textShadow:
              '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 6px 6px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}
