declare const VERSION = "1.0.6";
declare function pause(milliseconds: number): Promise<void>;
declare function findStartSessionButton(): HTMLButtonElement | undefined;
declare function startMiningSession(): Promise<void>;
declare function hasStartSessionButton(): Promise<boolean>;
declare function isFindingASolution(): Promise<boolean>;
declare function checkMinerStatus(): Promise<{
    needsIntervention: boolean;
    isFindingSolution: boolean;
    hasStartButton: boolean;
}>;
declare function handleMinerIntervention(isInitial?: boolean): Promise<void>;
declare function startAutoResume(intervalMs?: number): Promise<void>;
declare function handleException(error: any): void;
//# sourceMappingURL=autominer.d.ts.map