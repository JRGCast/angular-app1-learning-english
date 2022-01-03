import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-learning-component',
  /*É possível passar o selector como uma propriedade/atributo ou mesmo como uma classe,
  são métodos pouco utilizados, porém saiba:
  exemplo de selector como atributo: 
  selector: '[app-learning-component]',
  exemplo de selector como classe: 
  selector: '.app-learning-component', 
  **atenção para a classe do selector não colidir com uma classe CSS, pois quebrará o APP.
  lembrando que deve sempre ser uma string*/
  templateUrl: './learning-component.component.html',
   // É possível também criar o template diretamente, sem apontar para um arquivo:
  // template:`
  // <p>Este é o template de LEARNING COMPONENT, feito na própria linha</p>
  // <h1>Testando o backtick ${color}</h1>
  // `,
  // da mesma forma, pode-se fazer os estilos:
  /*Atenção que aqui está desta forma porque se trata de SASS, se fosse em SCSS ou CSS, seria p {color: red};
 em SASS, semelhante ao Python, não existe o curly braces, sendo feito via identação*/
  // styles: [`
  // .example
  //   color: ${color}
  // `],
  styleUrls: ['./learningComp1.component.sass', './learningComp2.component.sass'] // styleUrls também espera um array de 'dependências' de estilo;
})
export class LearningComponentComponent implements OnInit {
  public stringInterpol: string = 'https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg'
  public propertBinding: string = 'https://www.spectaculu.org.br/wp-content/uploads/2016/10/Gabrielle-Paisagem.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
