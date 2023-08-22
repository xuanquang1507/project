import InboxIcon from '@mui/icons-material/MoveToInbox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LoginIcon from '@mui/icons-material/Login';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShopIcon from '@mui/icons-material/Shop';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
export const MENUS = [
    {
        name: "Product Management",
        path: "/admin/product",
        icon: <ProductionQuantityLimitsIcon />
    },
    {
        name: "Preview",
        path: "/admin/preview",
        icon: <RemoveRedEyeIcon />
    },
    {
        name: "Purchase",
        path: "/itemproduct",
        icon: <ShopIcon />
    },
]