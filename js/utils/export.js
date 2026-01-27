import { elements } from '../ui/elements.js';

export async function exportToImage() {
    const { timetableGrid, exportModal, exportImage } = elements;

    // 1. 取得ターゲットを「テーブル全体を包むカード」に固定する
    // 親要素の overflow-x-auto を一時的に解除するのが html2canvas のコツです
    const container = timetableGrid.parentElement.parentElement;

    document.body.style.cursor = 'wait';

    try {
        // html2canvas が存在するかチェック（CDN読み込み待ち対策）
        if (typeof html2canvas === 'undefined') {
            throw new Error("html2canvas library not loaded");
        }

        const canvas = await html2canvas(container, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            // スクロールで見切れるのを防ぐ魔法のプロパティ
            width: container.scrollWidth,
            height: container.scrollHeight,
            windowWidth: container.scrollWidth,
            windowHeight: container.scrollHeight
        });

        const dataUrl = canvas.toDataURL('image/png');
        exportImage.src = dataUrl;
        exportModal.classList.remove('hidden');

    } catch (err) {
        console.error("Export failed:", err);
        alert("画像の生成に失敗しました。少し待ってからやり直してください。");
    } finally {
        document.body.style.cursor = 'default';
    }
}