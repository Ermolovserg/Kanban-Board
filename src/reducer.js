export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return state.map((category) => {
        if (category.status === 0) {
          return {
            ...category,
            tasks: [...category.tasks, payload.newTask],
          };
        }
        return category;
      });

    case "MOVE_TASK": {
      const { currentCategoryStatus, taskId } = payload;
      const prevCategoryIndex = currentCategoryStatus - 1;
      const movedTask = state[prevCategoryIndex].tasks.find(
        (task) => task.id === taskId
      );

      return state.map((category) => {
        if (category.status === prevCategoryIndex) {
          return {
            ...category,
            tasks: category.tasks.filter((task) => task.id !== taskId),
          };
        } else if (category.status === currentCategoryStatus) {
          return {
            ...category,
            tasks: [...category.tasks, movedTask],
          };
        }
        return category;
      });
    }

    case "CHANGE_TASK":
      return state.map((category) => {
        const hasTask = category.tasks.some((task) => task.id === payload.changedTask.id);
        if (hasTask) {
          return {
            ...category,
            tasks: category.tasks.map((task) =>
              task.id === payload.changedTask.id ? payload.changedTask : task
            ),
          };
        }
        return category;
      });

    case "DELETE_TASK":
      return state.map((category) => {
        const hasTask = category.tasks.some((task) => task.id === payload.taskId);
        if (hasTask) {
          return {
            ...category,
            tasks: category.tasks.filter((task) => task.id !== payload.taskId),
          };
        }
        return category;
      });

    default:
      return state;
  }
};
