// Type definitions for ag-grid v17.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { DraggingEvent, DragSourceType, DropTarget } from "../dragAndDrop/dragAndDropService";
export interface DropListener {
    getIconName(): string;
    onDragEnter(params: DraggingEvent): void;
    onDragLeave(params: DraggingEvent): void;
    onDragging(params: DraggingEvent): void;
    onDragStop(params: DraggingEvent): void;
}
export declare class BodyDropTarget implements DropTarget {
    private context;
    private gridPanel;
    private dragAndDropService;
    private columnController;
    private pinned;
    private eContainer;
    private eSecondaryContainers;
    private dropListeners;
    private currentDropListener;
    constructor(pinned: string, eContainer: HTMLElement);
    isInterestedIn(type: DragSourceType): boolean;
    getSecondaryContainers(): HTMLElement[];
    getContainer(): HTMLElement;
    private init();
    getIconName(): string;
    private getDropType(draggingEvent);
    onDragEnter(draggingEvent: DraggingEvent): void;
    onDragLeave(params: DraggingEvent): void;
    onDragging(params: DraggingEvent): void;
    onDragStop(params: DraggingEvent): void;
}
