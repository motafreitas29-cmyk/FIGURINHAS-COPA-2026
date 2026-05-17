import { useState, useEffect } from 'react';
import { Shield, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const PAYMENT_LINK = "https://pay.kirvano.com/66aad661-171a-48cf-b033-975b1910874c";

function useCountdown() {
  const [seconds, setSeconds] = useState(10 * 60 + 13);
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

const CAROUSEL_ITEMS = [
  { label: 'Kit Digital 48 Seleções Oficiais', img: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'Edição Especial Coca Cola', img: 'https://images.pexels.com/photos/2209/food-drink-can-coca-cola.jpg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'Fornecedor de Papel', img: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'Figurinhas Douradas', img: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'Figurinhas Extras', img: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'Mapa de Marcação', img: 'https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const FEATURES = [
  { icon: '📦', title: '48 Seleções Oficiais', desc: 'Pacote completo em PDF de alta qualidade com as 48 seleções da Copa de 2026.' },
  { icon: '🖼️', title: 'Qualidade Ultra HD', desc: 'Figurinhas em altíssima resolução com cores nítidas e definição perfeita.' },
  { icon: '🖨️', title: 'Imprima em Casa', desc: 'O acesso é tão simples que você consegue imprimir em qualquer impressora.' },
  { icon: '✅', title: 'Sem Repetidas', desc: 'Você escolhe o que quer imprimir! Esqueça as figurinhas repetidas.' },
];

const STEPS = [
  { n: '1', title: 'Realize o Pedido', desc: 'Complete a compra em nosso checkout 100% seguro. Acesse o Pay no Cartão.' },
  { n: '2', title: 'Receba o Acesso', desc: 'O acesso será enviado automaticamente para o seu e-mail cadastrado.' },
  { n: '3', title: 'Imprima em Casa', desc: 'Use papel adesivo e imprima em qualquer impressora para ter figurinhas perfeitas.' },
  { n: '4', title: 'Divirta-se!', desc: 'Recorte, cole e divirta-se colecionando com a família e amigos.' },
];

const KIT_LIST = [
  'Pacote 48 seleções de 2026 (Alta Qualidade)',
  'Bônus: Edição especial da Coca Cola',
  'Bônus: Fornecedor de papel',
  'Bônus: Figurinhas douradas exclusivas',
  'Bônus: Figurinhas extras',
  'Bônus: Mapa de Figurinhas para marcar',
  'Sem figurinhas repetidas (economia gigante)',
];

function CTAButton({ text = 'Garantir meu pack agora!', small = false }: { text?: string; small?: boolean }) {
  return (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-green-300 ${small ? 'py-3 px-6 text-base' : 'py-4 px-8 text-lg w-full sm:w-auto'}`}
    >
      {text} <span>→</span>
    </a>
  );
}

export default function App() {
  const countdown = useCountdown();
  const [carouselIdx, setCarouselIdx] = useState(0);
  const visibleCount = 4;

  const prev = () => setCarouselIdx(i => Math.max(0, i - 1));
  const next = () => setCarouselIdx(i => Math.min(CAROUSEL_ITEMS.length - visibleCount, i + 1));

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* TOP BAR */}
      <div className="bg-[#1a1a2e] text-yellow-400 text-center py-2 px-4 text-sm font-semibold">
        🔥 Oferta Especial! O preço vai subir em{' '}
        <span className="font-mono font-black text-yellow-300">{countdown}</span>
      </div>

      {/* HERO */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              ⚽ Mais de 300 pessoas já estão imprimindo suas figurinhas em casa
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Pack Completo de Figurinhas da Copa 2026
            </h1>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Chega de gastar fortunas com figurinhas caras, ir até a banca e correr o risco de tirar repetidas! Economize muito imprimindo em casa com as 48 seleções em qualidade Ultra HD.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <CTAButton />
            </div>
            <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
              <span className="text-green-500">✅</span> Compra 100% segura e acesso imediato
            </p>
          </div>
          <div className="flex-1 max-w-sm w-full">
            <img
              src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Pack Figurinhas Copa 2026"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* CAROUSEL - O QUE VOCÊ LEVA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">Tudo o que você leva hoje</h2>
          <p className="text-center text-gray-500 mb-8 text-sm">Deslize para ver o pacote completo e os bônus exclusivos.</p>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-300"
                style={{ transform: `translateX(-${carouselIdx * (100 / visibleCount)}%)` }}
              >
                {CAROUSEL_ITEMS.map((item, i) => (
                  <div key={i} className="min-w-[calc(25%-12px)] flex-shrink-0">
                    <div className={`rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-yellow-400' : 'border-gray-200'} bg-white shadow-sm`}>
                      <img src={item.img} alt={item.label} className="w-full h-32 object-cover" />
                      <p className="text-xs font-semibold text-center p-2 text-gray-700">{item.label}</p>
                      <p className="text-xs text-center text-gray-400 pb-2">eBônus</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">Tudo o que você precisa em um só lugar</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Desenvolvemos o material com a mais alta qualidade para você e sua família.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-green-50 rounded-2xl p-5 text-center border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-1">Como Funciona?</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">É rápido, fácil e seguro.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-3">{s.n}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2 uppercase">QUEM COMPROU, JÁ ESTÁ COMPLETANDO O ÁLBUM!!!</h2>
          <p className="text-center text-gray-500 mb-8 text-sm">Veja os resultados de quem já imprimiu e completou seu álbum.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400',
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md border border-gray-100">
                <img src={img} alt={`Depoimento ${i+1}`} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
            <h2 className="text-xl font-black text-gray-900 mb-4">Pack Figurinhas 2026 Completo</h2>
            <p className="text-gray-400 line-through text-sm mb-1">R$ 97,77</p>
            <p className="text-5xl font-black text-gray-900 mb-5">
              <span className="text-2xl">R$</span> 9,90
            </p>
            <ul className="text-left space-y-2 mb-6">
              {KIT_LIST.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-full text-base transition-all active:scale-95 mb-3"
            >
              Quero Aproveitar o Desconto 🛒
            </a>
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
              <Shield className="w-4 h-4" /> 7 Dias de Garantia Incondicional
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-6 px-4 text-center text-xs text-gray-400">
        <p className="mb-2">© 2026 Meu drive digital. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-gray-600">Termos de Uso</a>
          <a href="#" className="hover:text-gray-600">Política de Privacidade</a>
          <a href="#" className="hover:text-gray-600">Contato</a>
        </div>
      </footer>

    </div>
  );
}
