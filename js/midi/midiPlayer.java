// https://qiita.com/absol_abcX/items/e9c230b808e522154ae5 を参考にさせていただきました。
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

import javax.sound.midi.InvalidMidiDataException;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.MidiUnavailableException;
import javax.sound.midi.Sequence;
import javax.sound.midi.Sequencer;

public class midiPlayer {

    public static void main(String[] args) {
        Sequencer sequencer = null;

        try {
            sequencer = MidiSystem.getSequencer();
            sequencer.open();
        }
        catch (MidiUnavailableException e) {
            e.printStackTrace();
        }

        Scanner scanner = new Scanner(System.in);
        System.out.print("MIDIファイルのパス >> ");
        String path = scanner.next();

        try {
            File file = new File("../../Sounds/NOC21.mid");
            Sequence sequence = MidiSystem.getSequence(file);

            sequencer.setSequence(sequence);
        }
        catch (InvalidMidiDataException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }

        sequencer.start();

        System.out.println("適当に文字列を入力すると終了します。");
        System.out.print(">>");
        scanner.next();
        scanner.close();

        sequencer.stop();

        sequencer.close();
    }
}
