const FLEX_DIRECTIONS = [`row`, `row-reverse`, `column`, `column-reverse`];
const FLEX_WRAP_PROPERTIES = [`nowrap`, `wrap`];
const FLEX_JUSTIFY_PROPERTIES = [`center`, `flex-start`, `flex-end`, `normal`, `space-between`, `space-around`, `space-evenly`, `stretch`];
const FLEX_ALIGN_SELF_PROPERTIES = [`center`, `baseline`, `flex-end`, `flex-start`, `stretch`];
const FLEX_ALIGN_CONTENT_PROPERTIES = [`stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`];

const flexDirectionArticle = document.querySelector(`.article--flex-direction`);
const flexDirectionContainer = flexDirectionArticle.querySelector(`.article__list`);
const flexDirectionStatus = flexDirectionArticle.querySelector(`.article__status`);
const flexDirectionChangeButton = flexDirectionArticle.querySelector(`.article__button`);

const flexWrapArticle = document.querySelector(`.article--flex-wrap`);
const flexWrapContainer = flexWrapArticle.querySelector(`.article__list`);
const flexWrapStatus = flexWrapArticle.querySelector(`.article__status`);
const flexWrapChangeButton = flexWrapArticle.querySelector(`.article__button`);

const flexGrowArticle = document.querySelector(`.article--flex-grow`);
const flexGrowContainer = flexGrowArticle.querySelector(`.article__list`);
const flexGrowItem = flexGrowContainer.querySelector(`.article__item--grow`);
const flexGrowStatus = flexGrowArticle.querySelector(`.article__status`);
const flexGrowChangeButton = flexGrowArticle.querySelector(`.article__button`);

const flexShrinkArticle = document.querySelector(`.article--flex-shrink`);
const flexShrinkContainer = flexShrinkArticle.querySelector(`.article__list`);
const flexShrinkItem = flexShrinkContainer.querySelector(`.article__item--no-shrink`);
const flexShrinkStatus = flexShrinkArticle.querySelector(`.article__status`);
const flexShrinkChangeButton = flexShrinkArticle.querySelector(`.article__button`);

const flexBasisArticle = document.querySelector(`.article--basis`);
const flexBasisContainer = flexBasisArticle.querySelector(`.article__list`);
const flexBasisItem = flexBasisContainer.querySelector(`.article__item--basis`);
const flexBasisStatus = flexBasisArticle.querySelector(`.article__status`);
const flexBasisChangeButton = flexBasisArticle.querySelector(`.article__button`);

const flexJustifyArticle = document.querySelector(`.article--justify`);
const flexJustifyContainer = flexJustifyArticle.querySelector(`.article__list`);
const flexJustifyStatus = flexJustifyArticle.querySelector(`.article__status`);
const flexJustifyChangeButton = flexJustifyArticle.querySelector(`.article__button`);

const flexAlignSelfArticle = document.querySelector(`.article--align-self`);
const flexAlignSelfContainer = flexAlignSelfArticle.querySelector(`.article__list`);
const flexAlignSelfItem = flexAlignSelfContainer.querySelector(`.article__item--align-self`);
const flexAlignSelfStatus = flexAlignSelfArticle.querySelector(`.article__status`);
const flexAlignSelfChangeButton = flexAlignSelfArticle.querySelector(`.article__button`);

const flexAlignItemsArticle = document.querySelector(`.article--align-items`);
const flexAlignItemsContainer = flexAlignItemsArticle.querySelector(`.article__list`);
const flexAlignItemsStatus = flexAlignItemsArticle.querySelector(`.article__status`);
const flexAlignItemsChangeButton = flexAlignItemsArticle.querySelector(`.article__button`);

const flexAlignContentArticle = document.querySelector(`.article--align-content`);
const flexAlignContentContainer = flexAlignContentArticle.querySelector(`.article__list`);
const flexAlignContentStatus = flexAlignContentArticle.querySelector(`.article__status`);
const flexAlignContentChangeButton = flexAlignContentArticle.querySelector(`.article__button`);

const flexOrderArticle = document.querySelector(`.article--order`);
const flexOrderContainer = flexOrderArticle.querySelector(`.article__list`);
const flexOrderItem = flexOrderContainer.querySelector(`.article__item--order`);
const flexOrderStatus = flexOrderArticle.querySelector(`.article__status`);
const flexOrderChangeButton = flexOrderArticle.querySelector(`.article__button`);

let currentFlexDirection = 0;
let currentWrapStatus = 0;
let currentGrowStatus = 0;
let currentShrinkStatus = 1;
let currentBasisStatus = `auto`;
let currentJustifyContent = 0;
let currentAlignSelf = 0;
let currentAlignItems = 0;
let currentAlignContent = 0;
let currentOrderStatus = 0;

const changeFlexDirection = () => {
  currentFlexDirection += 1;

  if (currentFlexDirection > (FLEX_DIRECTIONS.length - 1)) {
    currentFlexDirection = 0;
  }

  flexDirectionContainer.style.flexDirection = FLEX_DIRECTIONS[currentFlexDirection];
  flexDirectionStatus.innerHTML = `${FLEX_DIRECTIONS[currentFlexDirection]}`;
};

const changeWrapStatus = () => {
  currentWrapStatus += 1;

  if (currentWrapStatus > (FLEX_WRAP_PROPERTIES.length - 1)) {
    currentWrapStatus = 0;
  }

  flexWrapContainer.style.flexWrap = FLEX_WRAP_PROPERTIES[currentWrapStatus];
  flexWrapStatus.innerHTML = `${FLEX_WRAP_PROPERTIES[currentWrapStatus]}`;
};

const changeFlexGrow = () => {
  currentGrowStatus = currentGrowStatus === 1 ? 0 : 1;
  flexGrowItem.style.flexGrow = currentGrowStatus;
  flexGrowStatus.innerHTML = currentGrowStatus;
};

const changeFlexShrink = () => {
  currentShrinkStatus = currentShrinkStatus === 1 ? 0 : 1;
  flexShrinkItem.style.flexShrink = currentShrinkStatus;
  flexShrinkStatus.innerHTML = currentShrinkStatus;
};

const changeFlexBasis = () => {
  currentBasisStatus = currentBasisStatus === `auto` ? 0 : `auto`;
  flexBasisItem.style.flexBasis = currentBasisStatus;
  flexBasisStatus.innerHTML = currentBasisStatus;
};

const changeJustifyContent = () => {
  currentJustifyContent += 1;

  if (currentJustifyContent > (FLEX_JUSTIFY_PROPERTIES.length - 1)) {
    currentJustifyContent = 0;
  }

  flexJustifyContainer.style.justifyContent = FLEX_JUSTIFY_PROPERTIES[currentJustifyContent];
  flexJustifyStatus.innerHTML = `${FLEX_JUSTIFY_PROPERTIES[currentJustifyContent]}`;
};

const changeAlignSelf = () => {
  currentAlignSelf += 1;

  if (currentAlignSelf > (FLEX_ALIGN_SELF_PROPERTIES.length - 1)) {
    currentAlignSelf = 0;
  }

  flexAlignSelfItem.style.alignSelf = FLEX_ALIGN_SELF_PROPERTIES[currentAlignSelf];
  flexAlignSelfStatus.innerHTML = `${FLEX_ALIGN_SELF_PROPERTIES[currentAlignSelf]}`;
};

const changeAlignItems = () => {
  currentAlignItems += 1;

  if (currentAlignItems > (FLEX_ALIGN_SELF_PROPERTIES.length - 1)) {
    currentAlignItems = 0;
  }

  flexAlignItemsContainer.style.alignItems = FLEX_ALIGN_SELF_PROPERTIES[currentAlignItems];
  flexAlignItemsStatus.innerHTML = `${FLEX_ALIGN_SELF_PROPERTIES[currentAlignItems]}`;
};

const changeAlignContent = () => {
  currentAlignContent += 1;

  if (currentAlignContent > (FLEX_ALIGN_CONTENT_PROPERTIES.length - 1)) {
    currentAlignContent = 0;
  }

  flexAlignContentContainer.style.alignContent = FLEX_ALIGN_CONTENT_PROPERTIES[currentAlignContent];
  flexAlignContentStatus.innerHTML = `${FLEX_ALIGN_CONTENT_PROPERTIES[currentAlignContent]}`;
};

const changeOrder = () => {
  currentOrderStatus = currentOrderStatus === 1 ? 0 : 1;
  flexOrderItem.style.order = currentOrderStatus;
  flexOrderStatus.innerHTML = currentOrderStatus;
};

flexDirectionChangeButton.addEventListener(`click`, changeFlexDirection);
flexWrapChangeButton.addEventListener(`click`, changeWrapStatus);
flexGrowChangeButton.addEventListener(`click`, changeFlexGrow);
flexShrinkChangeButton.addEventListener(`click`, changeFlexShrink);
flexBasisChangeButton.addEventListener(`click`, changeFlexBasis);
flexJustifyChangeButton.addEventListener(`click`, changeJustifyContent);
flexAlignSelfChangeButton.addEventListener(`click`, changeAlignSelf);
flexAlignItemsChangeButton.addEventListener(`click`, changeAlignItems);
flexAlignContentChangeButton.addEventListener(`click`, changeAlignContent);
flexOrderChangeButton.addEventListener(`click`, changeOrder);
