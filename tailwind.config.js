module.exports = {
  content: ['./src/*.tsx'],
  theme: {
    extend: {
      animation: {
        titleFocus: 'titleFocus 0.6s linear both',
        heartBeat: 'heartBeat 1.5s ease-in-out both',
        textPopUpTop: 'textPopUpTop 0.3s linear both',
        shadowDropBr:
          'shadowDropBr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        bgShowUp: 'bgShowUp 0.8s ease-in-out both',
        fadeIn: 'fadeIn 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        wobbleBottom: 'wobbleBottom 0.8s ease-in-out both',
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
        shadowDropBr: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          },
          '100%': {
            boxShadow: '12px 12px 20px -12px rgba(0, 0, 0, 0.35)',
          },
        },
        bgShowUp: {
          '0%': {
            color: '#000000',
            backgroundColor: '#ffffff',
          },
          '25%': {
            color: '#ffffff',
            backgroundImage:
              'linear-gradient(25deg, #8a8ad4, #b1afe2, #d7d5f0, #fcfdfe)',
          },
          '100%': {
            color: '#994250',
            backgroundImage:
              'linear-gradient(30deg, #8a8ad4, #b1afe2, #d7d5f0, #fcfdfe)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        wobbleBottom: {
          '0%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
          '15%': {
            transform: 'translateX(-30px) rotate(-6deg)',
          },
          '30%': {
            transform: 'translateX(15px) rotate(6deg)',
          },
          '45%': {
            transform: 'translateX(-15px) rotate(-3.6deg)',
          },
          '60%': {
            transform: 'translateX(9px) rotate(2.4deg)',
          },
          '75%': {
            transform: 'translateX(-6px) rotate(-1.2deg)',
          },
          '100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}
