import AppAreaChart from "@/components/ui/AppAreaChart";
import AppBarChart from "@/components/ui/AppBarChart";
import AppPieChart from "@/components/ui/AppPieChart";
import CardList from "@/components/ui/CardList";
import ToDoList from "@/components/ui/ToDoList";

const Homepage = () => {
  return (
    <div  className=" grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transaction"/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><ToDoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"/></div>
    </div>
  );
}
export default Homepage;
