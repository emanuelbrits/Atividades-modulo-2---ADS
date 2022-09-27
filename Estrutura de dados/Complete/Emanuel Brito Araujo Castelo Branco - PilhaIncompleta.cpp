#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
	public:
		char nome;
		No *prox;
		No(char n){
			nome = n;
			prox = NULL;
		}
};

class Pilha{
	public:
		No *topo;
		
		Pilha(){
			topo = NULL;
		}
		
		void push(char nome, Pilha *p){
			No *ptr = (No*) malloc(sizeof(No));
			if(ptr == NULL){
				printf("Erro de alocacao de no.\n");
				return;
			} else {
				ptr->nome = nome;
				ptr->prox = p->topo;
				p->topo = ptr;
			}
		}
		
		char pop(Pilha *p){
			No* ptr = 	p->topo;
			char nome;
			if(ptr == NULL) {
				printf("Pilha Vazia!\n");
			} else {
				p->topo = ptr->prox;
				ptr->prox = NULL;
				nome = ptr->nome;
				free(ptr);
				return nome;
			}
		}
		
		int isEmpty(){
			
			if(topo == NULL) {
				return 1;
			} else {
				return 0;
			}
		}
		
		void imprimepilha(Pilha *p) {
			No *ptr = p->topo;
			if(ptr == NULL) {
				printf("Pilha vazia!\n");
			} else {
				while (ptr != NULL) {
					printf("%c ", ptr->nome);
					ptr = ptr->prox;
				}
				printf("\n");
			}
		}
	
};
int main(){


}