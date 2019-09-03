/*
Курс JavaScript/DOM/Интерфейсы" для новичков
Проект, компонента Header:

Что нужно сделать:
1. Создать класс компонеты Header, которая будет рисовать header проекта внутрь заданного элемента
2. Отрисовать разметку компоненты header
3. Добавить возможность показывать/скрывать меню, по нажатию на кнопку (Это кнопка появляется на маленьких экранах)
- Класс кнопки, которая открывает меню: "navbar-toggler"
- Класс меню, которое нужно открывать: "navbar-collapse"
- Для открытия меню, ему нужно присвоить класс: "show"

Разметка для Header:
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <div>
            <button class="navbar-toggler d-none d-md-inline-flex d-inline-flex d-lg-none">
                <img src="https://iliakan.github.io/course-project/assets/icons/icon-menu.svg" alt="menu icon">
            </button>
            
            <a class="navbar-brand" href="#"><strong>AnyShop</strong></a>
        </div>
        
        <a href="#" class="d-none d-md-inline-flex d-inline-flex d-lg-none mobile-search-menu-icon"><img src="https://iliakan.github.io/course-project/assets/icons/icon-search.svg" alt="menu icon"></a>

        <div class="collapse navbar-collapse" id="navbarsExample07">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Sales <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Gift Cards</a>
                </li>
                <li class="nav-item">
                    <form class="form-inline my-2 my-md-0 ml-lg-5">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        <button type="submit" class="btn btn-outline-primary">Search</button>
                    </form>
                </li>
            </ul>
            <div>
                <a href="login.html" class="text-muted">Login</a>
                |
                <a href="#" class="text-muted">Register</a>
            </div>
        </div>
    </div>
</nav>
*/
'use strict';

class Header {
  // ... здесь пишете код
  constructor(element) {
    this.element = element;
     
    this.render(element);
  }

  render(element) {
    let menu = 
    `<nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
          <div>
              <button class="navbar-toggler d-none d-md-inline-flex d-inline-flex d-lg-none">
                  <img src="https://iliakan.github.io/course-project/assets/icons/icon-menu.svg" alt="menu icon">
              </button>
              
              <a class="navbar-brand" href="#"><strong>AnyShop</strong></a>
          </div>
          
          <a href="#" class="d-none d-md-inline-flex d-inline-flex d-lg-none mobile-search-menu-icon"><img src="https://iliakan.github.io/course-project/assets/icons/icon-search.svg" alt="menu icon"></a>

          <div class="collapse navbar-collapse" id="navbarsExample07">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Sales <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Gift Cards</a>
                  </li>
                  <li class="nav-item">
                      <form class="form-inline my-2 my-md-0 ml-lg-5">
                          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                          <button type="submit" class="btn btn-outline-primary">Search</button>
                      </form>
                  </li>
              </ul>
              <div>
                  <a href="login.html" class="text-muted">Login</a>
                  |
                  <a href="#" class="text-muted">Register</a>
              </div>
          </div>
      </div>
    </nav>`;

    this.element.insertAdjacentHTML('afterBegin', menu);
    this.container = this.element.querySelector('.container');
    this.container.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    let target = event.target;
    let button = target.parentElement.tagName === 'BUTTON';

    if (!button) {
      return;
    }    

    let elem = document.getElementById('navbarsExample07');
    elem.classList.toggle("show");

  }
  
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Header = Header;