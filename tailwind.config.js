module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

    theme: {

    extend: {

      backgroundImage: {
        
        'Estadio': "url('../src/imagens/soccer-stadium-full-people 1.jpg')",
        'FundoComFita': "url('../src/imagens/Component 3 (1).png')",
        'Login': "url('../src/imagens/Tela de Login.png')",
        'Registro':"url('../src/imagens/Tela de Registro 3.jpg')",
        'Senha':"url('../src/imagens/Página de recuperção de senha via numero de celular (3).jpg')",
        'Card':"url('../src/imagens/Frame 4749 (7).jpg')",
        'FuturosJogos':"url('../src/imagens/Frame 5003 (2).png')",
        // Adicione quantas imagens de fundo desejar
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '2.000rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'Tamanho24': '1.700rem',
        responsive: ['clamp(15px, 1.4vw, 71px)'],
        'customResponsive': ['clamp(10px, 1.5vw, 21px)'],
        'customResponsiveTitulo': ['clamp(13px, 2vw, 51px)'],
        'customResponsiveTitulo1': ['clamp(13px, 5vw, 51px)'],
        'customResponsiveTituloRecuperação': ['clamp(25px, 2vw, 51px)'],
        'customResponsiveConteudo': ['clamp(13px, 1.5vw, 41px)'],
        'customResponsiveFooter': ['clamp(10px, 0.5vw, 41px)'],
        'customResponsiveHeader': ['clamp(10px, 1vw, 41px)'],
        'customResponsiveNumber': ['clamp(10px, 0.5vw, 41px)'],
        'customResponsiveNumberPlayer': ['clamp(10px, 1vw, 41px)'],
        'customResponsiveJogosFuturos': ['clamp(5px, 1vw, 41px)'],
        
      },fontFamily: {
       Carbona: ["Carbona-Test", "sans-serif"],
       CarbonaBlack: ["CarbonaBlackSlanted", "sans-serif"],
       tuskerGrotesk: ["tuskerGrotesk", "sans-serif"],
       NorthZone: ["NorthZone", "sans-serif"],
       CarbonaBold:['CarbonaBold', 'bold'],
      },
      colors: {
        'Azul-Gol': '#0A1835',
        'Azul-GolClaro': '#1A3469',
        'Azul-GolClaro-50': '#20469B',
        'Azul-GolClaro100': ' #1D469B',
        'Verde-Gol': '#44D62D',
        'verde-gol-escuro':'#247018',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        getHeight: {
          'from': { maxHeight: '0%'},
          'to': { maxHeight: '0%' },
          '0%': { maxHeight: '0%' },
          '100%': { maxHeight: '100%' }
        },
        spinInfinite: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'get-height': 'getHeight 0.3s ease-in 0.5s backwards',
        'spin-infinite': 'spinInfinite 1s linear infinite',
      }
    },
  },
  plugins: [],
};
