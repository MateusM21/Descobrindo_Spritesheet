var PESSOA_DIREITA = 1;
var PESSOA_ESQUERDA = 2;
var PESSOA_CIMA = 3;
var PESSOA_BAIXO = 4;

function Pessoa(context, teclado, imagem){
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 10;
    //Criando a spritesheet a partir da imagem recebida
    this.sheet = new Spritesheet(context, imagem, 4, 6);
    this.sheet.intervalo = 60;
    //Estado inicial
    this.andando = false;
    this.direcao = PESSOA_DIREITA;
}
Pessoa.prototype = {
    atualizar: function(){
        if(this.teclado.pressionada(SETA_DIREITA)){
            if(! this.andando || this.direcao != PESSOA_DIREITA){
                this.sheet.linha = 2;
                this.sheet.coluna = 0;
            }
            //configuro o estado atual
            this.andando = true;
            this.direcao = PESSOA_DIREITA;
            //Neste estado, a animação da spritesheet deve rodar
            this.sheet.proximoQuadro();
            //Desloco a Pessoa
            this.x += this.velocidade;
        }
        else if (this.teclado.pressionada(SETA_ESQUERDA)){
            if(! this.andando || this.direcao != PESSOA_ESQUERDA){
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = PESSOA_ESQUERDA;
            this.sheet.proximoQuadro();
            this.x -= this.velocidade;
        }
        
        
        else if (this.teclado.pressionada(SETA_CIMA)){
            if(! this.andando || this.direcao != PESSOA_CIMA){
                this.sheet.linha = 3;
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = PESSOA_CIMA
            this.sheet.proximoQuadro();
            this.y -= this.velocidade;
        }
        else if (this.teclado.pressionada(SETA_BAIXO)){
            if(! this.andando || this.direcao != PESSOA_BAIXO){
                this.sheet.linha = 0;
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = PESSOA_BAIXO
            this.sheet.proximoQuadro();
            this.y += this.velocidade;
        }
        else {
            if(this.direcao == PESSOA_DIREITA)
                this.sheet.linha = 2;
            else if (this.direcao == PESSOA_ESQUERDA)
                this.sheet.linha = 1;
            else if (this.direcao == PESSOA_CIMA)
                this.sheet.linha = 3;
            else if (this.direcao == PESSOA_BAIXO)
                this.sheet.linha = 0;
            this.sheet.coluna = 0;
            this.andando = false;
        }
    },
    desenhar: function(){
        this.sheet.desenhar(this.x, this.y);
    }

}