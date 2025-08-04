import { useCallback, useState } from "react";

type Props = {
  stateRadioLabel: string;
};

export const useRadioLabel = ({ stateRadioLabel }: Props) => {
  // 確定値（親に反映されるラベル）
  const [selectedRadioLabel, setSelectedRadioLabel] = useState<string>(stateRadioLabel);

  // 一時値（モーダルなどで選択中の値）
  const [tempRadioLabel, setTempRadioLabel] = useState<string>(stateRadioLabel);

  // 一時値を更新
  const updateTempRadioLabel = useCallback((label: string) => {
    if (typeof label === "string") {
      setTempRadioLabel(label.trim());
    }
  }, []);

  // 一時値リセット
  const resetTempRadioLabel = useCallback(() => {
    setTempRadioLabel(stateRadioLabel);
  }, [stateRadioLabel]);

  // 確定値をセット（親に確定値を渡すときに呼ぶ）
  const submitRadioLabel = useCallback(() => {
    setSelectedRadioLabel(tempRadioLabel);
  }, [tempRadioLabel]);

  // 確定値を直接セットする関数（外部から使いたい場合）
  const setRadioLabel = useCallback((label: string) => {
    setSelectedRadioLabel(label);
    setTempRadioLabel(label);
  }, []);

  return {
    selectedRadioLabel,     // 確定値
    tempRadioLabel,         // 一時値
    updateTempRadioLabel,   // 一時値セット
    resetTempRadioLabel,    // 一時値リセット
    submitRadioLabel,       // 一時値を確定値に反映
    setRadioLabel,          // 確定値を直接セット（一時値も合わせて更新）
  };
};
