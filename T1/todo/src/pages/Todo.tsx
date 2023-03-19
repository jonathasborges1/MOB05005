import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { trash, pencil, add } from 'ionicons/icons';

interface TodoItem {
   id?: number;
   title: string;
 }

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: 'Fazer compras' },
    { id: 2, title: 'Fazer deveres' },
    { id: 3, title: 'Limpar a casa' },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState(''); // Guarda o titulo que o usuario estiver digitando para guardar o estado final da variavel
  const initialState: TodoItem = { id: undefined, title: "" }
  const [editingTodo, setEditingTodo] = useState<TodoItem>(initialState);

  const addTodo = () => {
    const newTodo: TodoItem = { id: Date.now(), title: newTodoTitle }; // Ex: id -> 1679176726444
    setTodos([...todos, newTodo]);
    setNewTodoTitle(''); // Seta o titulo para o estado inicial, ou seja, vazio
  };

  const removeTodo = (todoId?: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId); // Retorna todos os elementos da lista com excecao do todo excluido
    setTodos(newTodos); // Atualiza a lista 
  };

  const editTodo = (todo: TodoItem) => {
   setEditingTodo(todo);
  };

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editingTodo?.id) { // busca o elemento a ser editado
        return { ...todo, title: editingTodo!.title };
      }
      return todo;
    });
    setTodos(updatedTodos); // Atualiza lista com o item modificado 
    setEditingTodo(initialState); // restaura estado inicial, ou seja, nenhum item selecionado
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TODO List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {todos.map((todo) => (
            <IonItem key={todo.id}>
              {editingTodo?.id === todo.id ? (
                <IonInput
                  value={editingTodo.title}
                  onIonChange={(e) => setEditingTodo({id: todo.id, title: e.detail.value!})}
                  onIonBlur={updateTodo}
                  placeholder="Edite a tarefa selecionada"
                />
              ) : (
                <>
                  {todo.title}
                  <IonIcon
                    icon={pencil}
                    slot="end"
                    color="primary"
                    style={{ cursor: 'pointer' }}
                    onClick={() => editTodo(todo)}
                  />
                  <IonIcon
                    icon={trash}
                    slot="end"
                    color="danger"
                    style={{ cursor: 'pointer' }}
                    onClick={() => removeTodo(todo.id)}
                  />
                </>
              )}
            </IonItem>
          ))}
        </IonList>

        <IonItem>
          <IonInput
            placeholder="Digite o nome da tarefa"
            value={newTodoTitle}
            onIonChange={(e) => setNewTodoTitle(e.detail.value!)}
          />
          <IonButton onClick={addTodo} fill="solid" slot="end">
            <IonIcon icon={add} slot="start" />Adicionar Tarefa
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Todo;