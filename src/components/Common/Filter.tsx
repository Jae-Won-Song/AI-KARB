import { useState, useEffect } from 'react';
import FilterIcon from '../../assets/icon-filter.svg';
import FilterIconActive from '../../assets/icon-filter-a.svg';
import SearchInput from './SearchInput';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const medialToggleActive = () => {
    setIsMediaOpen(!isMediaOpen);
  };

  const categoryToggleActive = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target && !target.closest('.filter')) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filter">
      <button className={`filter__filterBtn ${isActive ? 'filter__filterBtn--active' : ''}`} onClick={toggleActive}>
        <span className="filter__filterBtn__span">필터</span>
        <div className="filter__filterBtn__icon">
          <img src={isActive ? FilterIconActive : FilterIcon} alt="필터 이미지" />
        </div>
      </button>
      {isActive && (
        <div className="filter__dropdown">
          <div className="filter__dropdown__container">
            <SearchInput placeholder="검색하기" size="small" />
            <div className="filter__dropdown__container_wrapper">
              <div className="filter__dropdown__container_wrapper_wrapper_media">
                {isMediaOpen ? (
                  <div className="filter__dropdown__container_wrapper_media--open">
                    <div className="filter__dropdown__container_wrapper_media--open_toggle">
                      <div className="filter__dropdown__container_wrapper_media--open_toggle_title">매체명</div>
                      <div
                        className="filter__dropdown__container_wrapper_media--open_toggle_arrow"
                        onClick={medialToggleActive}>
                        <img src={arrowUp} alt="위 화살표" />
                      </div>
                    </div>

                    <ul className="filter__dropdown__container_wrapper_media--open_contents">
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          경제투데이
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">12</div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          경제풍월미디어
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">35</div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          공무원뉴스
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">17</div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          교육전문지
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">2</div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          국민통일방송
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">3</div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          국제i저널
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">12</div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_media--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_media--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_name">
                          글로벌뉴스통신
                        </div>
                        <div className="filter__dropdown__container_wrapper_media--open_contents_list_number">124</div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="filter__dropdown__container_wrapper_media--close">
                    <div className="filter__dropdown__container_wrapper_media--close_title">매체명</div>
                    <div
                      className="filter__dropdown__container_wrapper_media--close_arrow"
                      onClick={medialToggleActive}>
                      <img src={arrowDown} alt="아래 화살표" />
                    </div>
                  </div>
                )}
              </div>

              {isCategoryOpen ? (
                <div className="filter__dropdown__container_wrapper_category">
                  <div className="filter__dropdown__container_wrapper_category--open">
                    <div className="filter__dropdown__container_wrapper_category--open_toggle">
                      <div className="filter__dropdown__container_wrapper_category--open_toggle_title">업종구분</div>
                      <div
                        className="filter__dropdown__container_wrapper_category--open_toggle_arrow"
                        onClick={categoryToggleActive}>
                        <img src={arrowUp} alt="위 화살표" />
                      </div>
                    </div>
                    <ul className="filter__dropdown__container_wrapper_category--open_contents">
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          가정용품
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          100
                        </div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          건강관련용품
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          100
                        </div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          수송기기
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          100
                        </div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          식품/음료
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          100
                        </div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          의료
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          100
                        </div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          전기/전자
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          10
                        </div>
                      </li>
                      <li className="filter__dropdown__container_wrapper_category--open_contents_list">
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox">
                          <input
                            className="filter__dropdown__container_wrapper_category--open_contents_list_checkbox_box"
                            type="checkbox"
                          />
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_name">
                          정밀사무기기
                        </div>
                        <div className="filter__dropdown__container_wrapper_category--open_contents_list_number">
                          100
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="filter__dropdown__container_wrapper_category--close">
                  <div className="filter__dropdown__container_wrapper_category--close_title">업종구분</div>
                  <div
                    className="filter__dropdown__container_wrapper_category--close_arrow"
                    onClick={categoryToggleActive}>
                    <img src={arrowDown} alt="아래 화살표" />
                  </div>
                </div>
              )}
            </div>

            <div className="filter__dropdown__container__buttons">
              <span className="filter__dropdown__container__buttons_reset">초기화</span>
              <span className="filter__dropdown__container__buttons_apply">적용</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
