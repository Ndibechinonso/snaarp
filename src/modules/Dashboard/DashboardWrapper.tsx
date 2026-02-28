import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import Sidebar from "@/components/layouts/Sidebar";
import TopBar from "@/components/layouts/TopBar";
import { useIsMobile } from "@/hooks/useMediaQuery";
import CloudNetworkWidget from "@/modules/Dashboard/components/CloudNetworkWidget";
import StorageWidget from "@/modules/Dashboard/components/StorageWidget";
import FileSharingWidget from "@/modules/Dashboard/components/FileSharingWidget";
import ActiveUsersWidget from "@/modules/Dashboard/components/ActiveUsersWidget";
import DeviceManagementWidget from "@/modules/Dashboard/components/DeviceManagementWidget";
import ProductivityWidget from "@/modules/Dashboard/components/ProductivityWidget";
import EmailChartWidget from "@/modules/Dashboard/components/EmailChartWidget";
import OnlineUsersWidget from "@/modules/Dashboard/components/OnlineUsersWidget";
import AppActivityWidget from "@/modules/Dashboard/components/AppActivityWidget";
import DragHandle from "@/modules/Dashboard/components/DragHandle";
import CollapsibleSection from "@/modules/Dashboard/components/CollapsibleSection";
import { Brush, CloudIcon, Globe, MonitorSpeaker } from "lucide-react";

interface Widget {
  id: string;
  component: React.ComponentType<Record<string, unknown>>;
  label: string;
  icon?: React.ReactNode;
  collapsible?: { title: string; rightContent?: React.ReactNode };
  componentProps?: Record<string, unknown>;
}

const upgradePlanButton = (
  <button
    type="button"
    className="bg-primary text-primary-foreground text-xs font-medium px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
  >
    Upgrade Plan
  </button>
);

const allWidgets: Widget[] = [
  {
    id: "cloud-storage",
    icon: <Globe className="w-4 h-4" />,
    component: CloudStorageRow as React.ComponentType<Record<string, unknown>>,
    label: "Cloud Network & Storage",
    collapsible: { title: "Cloud Network" },
    componentProps: { hideSectionTitle: true },
  },
  { id: "file-active", component: FileActiveRow as React.ComponentType<Record<string, unknown>>, label: "File Sharing & Active Users" },
  {
    id: "device",
    icon: <MonitorSpeaker className="w-4 h-4" />,
    component: DeviceManagementWidget,
    label: "Device Management",
    collapsible: { title: "Device Management Dashboard", rightContent: upgradePlanButton },
    componentProps: { showTitle: false },
  },
  {
    id: "productivity",
    icon: <Brush className="w-4 h-4" />,
    component: ProductivityWidget,
    label: "Productivity Report",
    collapsible: { title: "Productivity Report", rightContent: upgradePlanButton },
    componentProps: { showTitle: false },
  },
  { id: "email", component: EmailChartWidget as React.ComponentType<Record<string, unknown>>, label: "Email Chart" },
  { id: "online-users", component: OnlineUsersWidget as React.ComponentType<Record<string, unknown>>, label: "Online Users" },
  { id: "app-activity", component: AppActivityWidget as React.ComponentType<Record<string, unknown>>, label: "App Activity" },
];

function CloudStorageRow({ hideSectionTitle }: { hideSectionTitle?: boolean } = {}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="">
        <CloudNetworkWidget showTitle={!hideSectionTitle} />
      </div>
      <div className="">
        <StorageWidget />
      </div>
    </div>
  );
}

function FileActiveRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-3">
        <FileSharingWidget />
      </div>
      <div className="lg:col-span-2">
        <ActiveUsersWidget />
      </div>
    </div>
  );
}

const DashboardWrapper = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [widgetOrder, setWidgetOrder] = useState<string[]>(
    allWidgets.map((w) => w.id)
  );

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(widgetOrder);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setWidgetOrder(items);
  };

  const orderedWidgets = widgetOrder
    .map((id) => allWidgets.find((w) => w.id === id))
    .filter(Boolean) as Widget[];

  return (
    <div className="flex min-h-screen bg-white h-screen overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isMobile={isMobile}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto min-h-0">
        <TopBar
          showMenuButton={isMobile}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto overflow-x-hidden bg-[#f8f9fa] min-h-0 min-w-0">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="dashboard">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-4 md:space-y-6 max-w-[1400px] mx-auto min-w-0 w-full"
                >
                  {orderedWidgets.map((widget, index) => (
                    <Draggable
                      key={widget.id}
                      draggableId={widget.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`relative group transition-transform min-w-0 ${snapshot.isDragging
                            ? "shadow-xl ring-2 ring-primary/30 rotate-1 scale-[1.01] z-10"
                            : ""
                            }`}
                        >
                          <DragHandle provided={provided} />
                          {widget.collapsible ? (
                            <CollapsibleSection
                              title={widget.collapsible.title}
                              rightContent={widget.collapsible.rightContent}
                              icon={widget.icon}
                            >
                              <widget.component {...(widget.componentProps ?? {})} />
                            </CollapsibleSection>
                          ) : (
                            <widget.component {...(widget.componentProps ?? {})} />
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
