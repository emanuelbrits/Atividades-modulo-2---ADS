#include "../pilha.h"
#include "stdio.h"

void ordenar(int value, Pilha* pilhaA, Pilha* pilhaB) {

	if(!(value <= retornatopo(pilhaA) || vazia(pilhaA))) {
		empilhar(desempilhar(pilhaA), pilhaB);
		ordenar(value, pilhaA, pilhaB);
	} else {
		empilhar(value, pilhaA);
		return;
	}

	empilhar(desempilhar(pilhaB), pilhaA);
}

int main() {

	Pilha* pA = criar_pilha();
	Pilha* pB = criar_pilha();

	int value;
	scanf("%d", &value);

	while(value != 0) {
		ordenar(value, pA, pB);
		scanf("%d", &value);
	}

	printf("\nitens organizados:\n");

	while(!vazia(pA)) {
		printf("%d\n", desempilhar(pA));
	}

	return 0;
}