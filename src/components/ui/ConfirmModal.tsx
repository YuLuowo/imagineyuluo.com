import { useEffect } from "react";

type ConfirmModalProps = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    message?: string;
};

export function ConfirmModal({ isOpen, onConfirm, onCancel, message }: ConfirmModalProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-zinc-900 rounded-xl p-4 md:p-6 max-w-sm w-full shadow-lg">
                <p className="text-base md:text-lg text-gray-100 mb-6">{message}</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-700 text-gray-200 text-sm md:text-base cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-red-600 text-white text-sm md:text-base hover:bg-red-700 cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
