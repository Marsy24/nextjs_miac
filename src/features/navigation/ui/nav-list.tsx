import { cn } from '@/lib/utils';
import { NavigationMenuList} from '@radix-ui/react-navigation-menu';
import { INavItem, NavItem } from './nav-item';

interface IProps {
    navItems: Array<INavItem>
    className?: string;
}

export const NavList: React.FC<IProps> = ({ className, navItems }) => {
    return (
        <NavigationMenuList className={cn('flex items-center', className)}>
            {
                navItems.map(navItem => (<NavItem key={navItem.id} navItem={{...navItem}} />))
            }
        </NavigationMenuList>
    )
}