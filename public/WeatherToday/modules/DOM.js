export function returnFlexContainer(direction, id) {
    let container = document.createElement('div');
    container.id = id;
    container.style.display = 'flex';
    container.style.flexDirection = direction;
    return container;
}
