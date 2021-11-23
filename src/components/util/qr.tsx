const CHART_API_URL = 'https://chart.apis.google.com/chart?cht=qr&choe=Shift_JIS';

const chartSizeList = {
    'small': '&chs=150x150',
    'normal': '&chs=300x300',
    'big': '&chs=400x400',
};

type prPropsType = {
    size?: 'small' | 'normal' | 'big';
    url: string;
};

export const QR = ({ url, size }: prPropsType) => {
    return (
        <>
            <img src={CHART_API_URL + chartSizeList[size] + '&chl=' + url} alt="qr" className="mx-auto"></img>
        </>
    );
};

QR.defaultProps = {
    size: 'normal',
};