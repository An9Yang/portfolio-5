import Component_2_1 from './Component_2_1';

function Component_2({ isOpen, onClose }) {
  return (
    <div
      className={`menu ${isOpen ? 'menu--open' : ''}`}
      data-frz-id="cbp98l87cf"
      data-component-id="Component_2"
    >
      <div
        className={`menu__back-layer ${isOpen ? 'menu__back-layer--visible' : ''}`}
        data-frz-id="5vcwy7fs9td"
        onClick={onClose}
      ></div>
      <Component_2_1 isOpen={isOpen} />
    </div>
  );
}

export default Component_2;
