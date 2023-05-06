import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';

export default function Body() {
    return (

        <div className="ALL_side_bar">

            <div className="ALL">
                <Stories />
                <Posts />
            </div>

            <SideBar />

        </div>
    );
}