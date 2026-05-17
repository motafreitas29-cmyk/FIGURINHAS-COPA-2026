import { useState, useEffect } from 'react';
import { Shield, CheckCircle, Package, Mail, Printer, Smile, Star } from 'lucide-react';

const PAYMENT_LINK = "https://pay.kirvano.com/66aad661-171a-48cf-b033-975b1910874c";

function useCountdown() {
  const [seconds, setSeconds] = useState(15 * 60);
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

const KIT_ITEMS = [
  { title: '48 Seleções em Alta Qualidade', desc: 'Todas as seleções da Copa 2026 em PDF ultra HD prontas para imprimir' },
  { title: 'Edição Especial Coca-Cola', desc: 'Figurinhas exclusivas da parceria oficial Coca-Cola com a Copa' },
  { title: 'Figurinhas Douradas Exclusivas', desc: 'Figurinhas especiais douradas que todo colecionador quer ter' },
  { title: 'Mapa de Marcação', desc: 'Álbum completo para você marcar todas as suas figurinhas' },
  { title: 'Fornecedor de Papel Adesivo', desc: 'Lista dos melhores fornecedores para imprimir com qualidade' },
  { title: 'Figurinhas Extras Bônus', desc: 'Pacote bônus com figurinhas surpresa exclusivas' },
];

const STEPS = [
  { icon: Package, title: 'Realizar o Pedido', desc: 'Acesse o checkout seguro e finalize sua compra em segundos' },
  { icon: Mail, title: 'Receber o Acesso', desc: 'Você recebe o link de acesso diretamente no seu e-mail' },
  { icon: Printer, title: 'Imprimir em Casa', desc: 'Imprima as figurinhas em papel adesivo na sua impressora' },
  { icon: Smile, title: 'Divertir-se!', desc: 'Recorte, cole e complete seu álbum da Copa 2026!' },
];

function CTAButton({ text = 'Garantir meu pack agora!' }: { text?: string }) {
  return (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold text-xl py-5 px-8 rounded-xl text-center transition-all duration-200 shadow-lg hover:shadow-green-300 uppercase tracking-wide"
    >
      {text}
    </a>
  );
}

export default function App() {
  const countdown = useCountdown();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* BARRA DE URGÊNCIA */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="text-sm sm:text-base font-bold">
          🔥 OFERTA ESPECIAL — O preço vai subir em{' '}
          <span className="bg-white text-red-600 px-2 py-0.5 rounded font-mono font-black text-lg">{countdown}</span>
        </p>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-600 font-bold text-sm sm:text-base mb-2 uppercase tracking-wider">⚽ Copa do Mundo 2026</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Chega de gastar fortunas com figurinhas caras, ir até a banca e correr o risco de tirar repetidas!
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-6 font-medium">
            Agora você imprime as figurinhas da Copa 2026 <strong>em casa</strong>, com qualidade profissional, por menos de <strong>R$10</strong>
          </p>
          <div className="bg-white rounded-2xl p-2 shadow-xl mb-6 max-w-lg mx-auto">
            <img
              src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Kit Figurinhas Copa 2026"
              className="w-full rounded-xl object-cover max-h-72"
            />
          </div>
          <CTAButton />
          <p className="text-sm text-gray-700 mt-3">✅ Acesso imediato &nbsp;|&nbsp; 🔒 Compra 100% segura</p>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <div className="bg-green-600 text-white py-3 px-4 text-center">
        <p className="font-bold text-base sm:text-lg">⚽ Mais de <strong>300 pessoas</strong> já estão imprimindo suas figurinhas!</p>
      </div>

      {/* O QUE VOCÊ LEVA */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">Tudo o que você leva hoje</h2>
          <p className="text-center text-gray-500 mb-10">Tudo o que você precisa em um só lugar</p>
          <div className="space-y-4">
            {KIT_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton text="Quero Aproveitar o Desconto" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-10">Como Funciona?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-10">O que estão falando</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 text-sm italic mb-4">
                  {i === 1 && '"Incrível! Imprimi todas as figurinhas em casa e ficaram perfeitas. Meus filhos adoraram!"'}
                  {i === 2 && '"Nunca pensei que fosse tão fácil. Chegou no e-mail na hora e já saí imprimindo!"'}
                  {i === 3 && '"Economizei muito comparado com comprar nas bancas. Recomendo demais!"'}
                  {i === 4 && '"As figurinhas douradas são incríveis! Qualidade surpreendente pelo preço."'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                    {['M','J','A','C'][i-1]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{['Maria S.','João P.','Ana L.','Carlos R.'][i-1]}</p>
                    <p className="text-gray-400 text-xs">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-14 px-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-red-700 font-bold text-sm uppercase tracking-wider mb-2">⏰ Oferta por tempo limitado</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Garanta seu kit agora!</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-6">
            <p className="text-gray-400 line-through text-lg mb-1">De R$ 97,00</p>
            <p className="text-gray-600 text-base mb-1">Por apenas</p>
            <p className="text-6xl font-black text-green-600 leading-none mb-1">
              R$<span>9</span><span className="text-4xl">,90</span>
            </p>
            <p className="text-gray-500 text-sm mb-6">Pagamento único — acesso vitalício</p>
            <CTAButton />
            <p className="text-xs text-gray-400 mt-3">🔒 Pagamento 100% seguro • Acesso imediato</p>
          </div>
          <p className="text-gray-700 text-sm font-bold">
            ⚽ Mais de 300 pessoas já aproveitaram essa oferta!
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-gray-900 mb-3">Garantia de 7 dias</h2>
          <p className="text-gray-600 text-base mb-6">
            Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias. Sem perguntas, sem burocracia.
          </p>
          <CTAButton text="Quero Aproveitar o Desconto" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-xs">
        <p className="mb-2">Este produto é digital. Após a compra você recebe acesso imediato por e-mail.</p>
        <p>© 2026 — Todos os direitos reservados</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </footer>
    </div>
  );
}
