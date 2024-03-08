import classNames from 'classnames/bind';
import styles from './FooterSide.module.scss';

const cx = classNames.bind(styles);

function FooterSide() {
    return (
        <div className={cx('footer-page')}>
            <div className={cx('details-page')}>
                <span>Clone Tiktok mục đích học react và sử dụng API</span>
            </div>
            <div className={cx('details-page')}>
                <span>Nguồn API: F8</span>
            </div>

            <div className={cx('details-page')}>
                <span> Phạm Thái Nguyên © 2024 </span>
            </div>
        </div>
    );
}

export default FooterSide;
