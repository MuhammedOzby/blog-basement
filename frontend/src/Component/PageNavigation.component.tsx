import React, { Component } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

interface ClassState {
  menu: boolean;
}

export default class PageNavigation extends Component<{}, ClassState> {
  public TR_MENU: Array<{
    title: string;
    key: string;
  }>;
  public menuReferance: React.RefObject<HTMLDivElement>;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      menu: false,
    };
    this.menuReferance = React.createRef();
    this.TR_MENU = [
      { title: "ÇALIŞMALAR", key: "examples" },
      { title: "HAKKIMDA", key: "about-me" },
      { title: "İLETİŞİM", key: "contact" },
      { title: "GEÇMİŞ", key: "resume" },
    ];
  }

  componentDidMount(): void {
    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape") this.setState({ menu: false });
    });
  }

  private TR_MENU_LIST(isDesktop: boolean = false): React.ReactNode {
    return this.TR_MENU.map((data) => (
      <li key={`${data.key}-mobile-menu-tr`}>
        <Link
          to={`/${data.key}`}
          replace={true}
          key={`${data.key}-mobile-menu-tr-link`}
        >
          <h1 className={`title ${isDesktop ? "is-1" : "is-4"}`}>
            {data.title}
          </h1>
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <>
        <button
          className="button main-menu-button"
          onClick={() => this.setState({ menu: !this.state.menu })}
        >
          <RiMenu3Line />
        </button>
        <CSSTransition
          in={this.state.menu}
          timeout={500}
          unmountOnExit
          classNames={{
            enter: "animate__animated animate__slideInRight",
            exit: "animate__animated animate__slideOutRight",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "RGBA(0,0,0,0.24)",
              position: "fixed",
              top: 0,
              left: 0,
            }}
          >
            <div
              onClick={() => this.setState({ menu: !this.state.menu })}
              style={{ width: "100%", height: "100%" }}
            ></div>
            <div className="drawer custom-menu-box-desktop">
              <ul className="menu">{this.TR_MENU_LIST(true)}</ul>
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
}
