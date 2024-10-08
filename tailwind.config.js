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
        'Registro':"url('../src/imagens/Tela de Registro 1.jpg')",
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
        responsive: ['clamp(15px, 2vw, 21px)'],
        'customResponsive': ['clamp(15px, 2vw, 21px)'],
        
      },fontFamily: {
       Carbona: ["Carbona-Test", "sans-serif"],
       CarbonaBlack: ["CarbonaBlackSlanted", "sans-serif"],
       tuskerGrotesk: ["tuskerGrotesk", "sans-serif"],
       NorthZone: ["NorthZone", "sans-serif"],
      },
      colors: {
        'Azul-Gol': '#0A1835',
        'Azul-GolClaro': '#1A3469',
        'Azul-GolClaro-50': '#20469B',
        'Verde-Gol': '#44D62D',
        'verde-gol-escuro':'#247018',
      },
    },
  },
  plugins: [],
};
