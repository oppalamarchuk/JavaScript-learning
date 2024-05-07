#include <iostream>
#include "fstream"
using namespace std;



class ValueList {
private:
	struct Node {
		int value;
		Node* next;
	};
    Node* first;

public: 

    ValueList(int i, int j, int value) {
		add(i);
		add(j);
		add(value);
    }

    void add(int a) {
		Node* newNode = new Node{ a, nullptr };

		if (first == nullptr)
		{
			first = newNode;
		}
		else {
			Node* current = first;
			while (current->next != nullptr) {
				current = current->next;
			}
			current->next = newNode;
		}
    }
	void print() {
		Node* current = first;
		while (current!= nullptr) {
			cout << current->value << " ";
			current = current->next;
		}
		cout << endl;
	}
	void getI() {

	}

};

class Matrix {
private:
	struct Node
	{
		ValueList* vl;
	//	int i, j, value;
		Node* next;
	};
	Node* node;

public:
	Matrix() : node(nullptr) {}

	void add(int i, int j, int value) {

		ValueList* vl1 = new ValueList(i, j, value);
		Node* newNode = new Node{ vl1, node };
		node = newNode;
		
	}
	void transp() {

	}

	void print() {
		Node* temp = node;
		while (temp != nullptr) {
			temp->vl->print();
			temp = temp->next;
		}
		cout << endl;
	}
};


int main() {

	int size = 5;
	int** matrix = new int* [size];
	for (size_t i = 0; i < size; i++)
	{
		matrix[i] = new int[size];
	}
	ifstream is;
	is.open("Text.txt");
	for (size_t i = 0; i < size; i++)
	{
		for (size_t j = 0; j < size; j++)
		{
			is >> matrix[i][j];
		}
	}
	
	for (size_t i = 0; i < size; i++)
	{
		for (size_t j = 0; j < size; j++)
		{
			cout << matrix[i][j] << '\t';
		}
		cout << endl;
	}

	Matrix matr;
	for (size_t i = 0; i < size; i++)
	{
		for (size_t j = 0; j < size; j++)
		{
			if (matrix[i][j] != 0)
			{
				matr.add(i, j,matrix[i][j]);
				cout<< i << " " << j<<" "<< matrix[i][j] << endl;
			}
		}
	}
	cout << endl;
	matr.print();

	return 0;
}