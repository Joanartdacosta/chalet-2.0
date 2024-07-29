import HighlightedText from "@/components/dashboard/about/HighlightedText";
import ImageWithText from "./ImageWithText";
import ImageWithTextReverse from "./ImageWithTextReverse";

export default function AboutText() {
  return (
    <div className="quicksand p-20">
      <div className="mb-20">
        <ImageWithText
          info1={
            "Chamo-me Mariana e desde pequena que sempre fui apaixonada por arquitetura e decoração. Sabem aquela pessoa que vai na rua ou no carro, a obervar as casas e edifícios e fica a imaginar como será cada detalhe, a sua decoração, quem lá vive? Sim, eu sempre fui essa pessoa!"
          }
          info2={
            "Contudo, a vida não me encaminhou logo para esta área, tendo iniciado o meu percurso profissional na área da saúde. Sou licenciada em Fisioterapia, exercendo esta profissão desde 2013."
          }
          info3={
            "Sabem o que é fazer algo e sentir uma verdadeira paixão? Pois, foi isso que me aconteceu! Adorei todo aquele pocesso de remodelação e decoração em que me vi envolvida,uma vez que fui responsável por toda a escolha de materiais e disposição do espaço."
          }
          quote={
            "Em 2017, o projeto de remodelação da minha primeira casa,despertou de novo em mim o fascínio pela decoração."
          }
          image={
            "https://chalet-webapp.s3.amazonaws.com/designer-photos/IMG_0970+(2).JPG"
          }
          description={"designer"}
        />
      </div>

      <div className="mb-20 flex">
        <ImageWithTextReverse
          info1={
            "Esta etapa da minha vida, aliada ao facto de não me sentir completamente realizada e feliz na minha área de formação base, fez com que surgisse a ideia e vontade para mudar de rumo, tendo começado a pensar em procurar formação nesta área, contando com todo o apoio de familiares e amigos (sobretudo do marido que é engenheiro civil)!"
          }
          info2={
            "Em plena pandemia, senti que não podia adiar mais este objetivo e inscrevi-me no curso de Design de Interiores da Lisbon School of Design, que iniciei em Setembro de 2020."
          }
          info3={
            "Terminado o curso em Julho de 2021 e prestes a completar 30 anos, senti que era então altura de arriscar e iniciar um projeto que realmente me realizasse e fizesse feliz! Foi aí que me despedi do meu emprego a full time e criei este meu Chalet, que tem sido um desafio e aprendizagem constantes!"
          }
          quote={
            "A formação foi uma experiência enriquecedora, de muito trabalho e aprendizagem, onde conheci pessoas incríveis que me ajudaram a concretizar este meu sonho!"
          }
          image={
            "https://chalet-webapp.s3.amazonaws.com/designer-photos/IMG_4131.JPG"
          }
          description={"designer"}
        />
      </div>

      <HighlightedText
        info={
          "Agradeço a todos os que, até agora, já confiaram no meu trabalho e conto com vocês para que venham por aí muitos bons e novos projetos!"
        }
      />
    </div>
  );
}
