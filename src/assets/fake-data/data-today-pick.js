import nomicLogo from '../images/crypto/nomic/nomic-logo.svg';
import axelarLogo from '../images/crypto/axelar/Axelar-small-logo.svg';
import evmosLogo from '../images/crypto/evmos/evmos-logo.svg';

const todayPickData = [
    {
        name: "Nomic",
        tags: "cosmos",
        logo: nomicLogo,
        apr: "900%",
        stakeUrl: 'https://app.nomic.io/',
        isEnabled: true,
    },
    {
        name: "Axelar",
        tags: "cosmos",
        logo: axelarLogo,
        apr: "0%",
        stakeUrl: '',
        isEnabled: false,
    },
    {
        name: "EVMOs",
        tags: "cosmos",
        logo: evmosLogo,
        apr: "0%",
        stakeUrl: '',
        isEnabled: false,
    },
]

export default todayPickData;
